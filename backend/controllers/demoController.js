const mongoose = require('mongoose');
const DemoRequest = require('../models/DemoRequest');
const { validateDemoRequest } = require('../validators/demoValidator');
const { sendAdminNotification } = require('../config/mailer');

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

    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.log(`📧 Demo request received (not saved — no DB): ${sanitized.email}`);
      
      // Send email notification silently so it doesn't fail the response
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

    // Save to database
    const demoRequest = await DemoRequest.create(sanitized);

    console.log(`📧 Demo request saved`);

    // Send email notification silently so it doesn't fail the response
    try {
      await sendAdminNotification(sanitized);
    } catch (emailErr) {
      console.error("Non-fatal: Email notification failed", emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Demo request received. We will be in touch soon!',
      data: { email: demoRequest.email, id: demoRequest._id },
    });
  } catch (err) {
    // Handle duplicate email gracefully
    if (err.code === 11000) {
      return res.status(200).json({
        success: true,
        message: 'Demo request received. We will be in touch soon!',
      });
    }
    next(err);
  }
};

module.exports = { createDemoRequest };
