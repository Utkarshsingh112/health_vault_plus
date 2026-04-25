const express = require('express');
const router = express.Router();
const { createDemoRequest } = require('../controllers/demoController');
const rateLimit = require('express-rate-limit');

// POST /api/demo-request
// router.post('/demo-request', createDemoRequest);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many requests. Please try again later.' },
  keyGenerator: (req) => req.ip,
  skip: () => process.env.NODE_ENV === 'test',
});

router.post('/demo-request', limiter, createDemoRequest);

module.exports = router;
