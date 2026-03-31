const express = require('express');
const router = express.Router();
const { createDemoRequest } = require('../controllers/demoController');

// POST /api/demo-request
router.post('/demo-request', createDemoRequest);

module.exports = router;
