const mongoose = require('mongoose');
const DemoRequest = require('../models/DemoRequest');
const { validateDemoRequest } = require('../validators/demoValidator');
const { sendAdminNotification } = require('../config/mailer');

// In-memory dedup store
const recentEmails = new Map(); // email -> timestamp
const DUP_WINDOW = 10 * 60 * 1000; // 10 minutes

/**
 * POST /api/demo-request
 * Creates a new demo request or help-widget contact request.
 * Works gracefully even if MongoDB is not connected.
 */
const createDemoRequest = async (req, res, next) => {
  try {
    // Validate input
    const { valid, error, sanitized } = validateDemoRequest(req.body);
    if (!valid) {
      return res.status(400).json({ success: false, error });
    }

    const now = Date.now();
    const lastRequestTime = recentEmails.get(sanitized.email);

    //  Duplicate check (works for both DB ON + OFF)
    if (lastRequestTime && now - lastRequestTime < DUP_WINDOW) {
      return res.status(429).json({
        success: false,
        error: 'Duplicate request detected. Please wait before retrying.',
      });
    }

    // Store email + schedule cleanup
    recentEmails.set(sanitized.email, now);
    setTimeout(() => {
      recentEmails.delete(sanitized.email);
    }, DUP_WINDOW);

    //  DB DOWN CASE
    if (mongoose.connection.readyState !== 1) {
      console.log(`📧 Demo request received (not saved — no DB): ${sanitized.email}`);

      try {
        await sendAdminNotification(sanitized);
      } catch (emailErr) {
        console.error("Non-fatal: Email notification failed", emailErr.message);
      }

      return res.status(200).json({
        success: true,
        message: 'Demo request received. We will be in touch soon!',
        data: { email: sanitized.email },
      });
    }

    //  Save to DB
    const demoRequest = await DemoRequest.create(sanitized);

    console.log(
      ` Demo request saved — ID: ${demoRequest._id} | Email: ${demoRequest.email}`
    );

    //  Send email (non-blocking)
    try {
      await sendAdminNotification(sanitized);
    } catch (emailErr) {
      console.error("Non-fatal: Email notification failed", emailErr.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Demo request received. We will be in touch soon!',
      data: { email: demoRequest.email },
    });

  } catch (err) {
    //  Duplicate email (DB unique index)
    if (err.code === 11000) {
      console.warn(`⚠️ Duplicate email attempt: ${req.body?.email}`);

      return res.status(200).json({
        success: true,
        message: 'Demo request received. We will be in touch soon!',
      });
    }

    next(err);
  }
};

module.exports = { createDemoRequest };