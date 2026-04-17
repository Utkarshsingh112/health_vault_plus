const mongoose = require('mongoose');

const demoRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    query: {
      type: String,
      trim: true,
      default: '',
    },
    submissionType: {
      type: String,
      enum: ['demo', 'contact'],
      default: 'demo',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('DemoRequest', demoRequestSchema);
