const mongoose = require('mongoose');
const SupportRequest = require('../models/SupportRequest');
const { validateSupportRequest } = require('../validators/supportValidator');
const { sendAdminNotification, sendUserConfirmation } = require('../config/mailer');

// In-memory dedup store
const recentSupportEmails = new Map(); // email -> timestamp
const DUP_WINDOW = 5 * 60 * 1000; // 5 minutes duplicate window for support requests

/**
 * POST /api/support-request
 * Handles creation of customer support and contact ticket requests.
 * Works gracefully even if MongoDB is not connected.
 */
const createSupportRequest = async (req, res, next) => {
  try {
    // Validate input
    const { valid, error, sanitized } = validateSupportRequest(req.body);
    if (!valid) {
      return res.status(400).json({ success: false, error });
    }

    const now = Date.now();
    const lastRequestTime = recentSupportEmails.get(sanitized.email);

    // Duplicate check
    if (lastRequestTime && now - lastRequestTime < DUP_WINDOW) {
      return res.status(429).json({
        success: false,
        error: 'Duplicate request detected. Please wait before retrying.',
      });
    }

    // Store email + schedule cleanup
    recentSupportEmails.set(sanitized.email, now);
    setTimeout(() => {
      recentSupportEmails.delete(sanitized.email);
    }, DUP_WINDOW);

    // Prepare mailer payload
    const mailerPayload = {
      name: sanitized.name,
      email: sanitized.email,
      phone: sanitized.phone,
      query: sanitized.query,
      submissionType: 'contact', // tells mailer to format as contact ticket
    };

    // DB DOWN CASE
    if (mongoose.connection.readyState !== 1) {
      console.log(`📧 Support request received (not saved — no DB): ${sanitized.email}`);

      sendAdminNotification(mailerPayload).catch((emailErr) => {
        console.error("Non-fatal: Admin support email notification failed", emailErr.message);
      });
      sendUserConfirmation(sanitized.email, sanitized.name, 'contact').catch((emailErr) => {
        console.error("Non-fatal: User support email confirmation failed", emailErr.message);
      });

      return res.status(200).json({
        success: true,
        message: 'Support request received. We will be in touch soon!',
        data: sanitized,
      });
    }

    // Save to DB
    const supportRequest = await SupportRequest.create(sanitized);

    console.log(
      ` Support request saved successfully | Email: ${supportRequest.email}`
    );

    // Send email notifications
    sendAdminNotification(mailerPayload).catch((emailErr) => {
      console.error("Non-fatal: Admin support email notification failed", emailErr.message);
    });
    sendUserConfirmation(sanitized.email, sanitized.name, 'contact').catch((emailErr) => {
      console.error("Non-fatal: User support email confirmation failed", emailErr.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Support request received. We will be in touch soon!',
      data: supportRequest,
    });

  } catch (err) {
    next(err);
  }
};

module.exports = { createSupportRequest };
