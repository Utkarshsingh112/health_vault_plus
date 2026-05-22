const express = require('express');
const router = express.Router();
const { createSupportRequest } = require('../controllers/supportController');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // limit each IP to 5 support requests per window
  message: { success: false, error: 'Too many support queries. Please try again later.' },
  skip: () => process.env.NODE_ENV === 'test',
});

// POST /api/support-request
router.post('/support-request', limiter, createSupportRequest);

module.exports = router;
