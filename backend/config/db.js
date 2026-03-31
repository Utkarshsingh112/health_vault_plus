const mongoose = require('mongoose');

/**
 * Connect to MongoDB. Gracefully handles missing connection string
 * so the app can start even without a database configured.
 */
const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn('⚠️  MONGO_URI not set in .env — running without database. Demo requests will not be saved.');
    return null;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    console.warn('⚠️  App will continue running without database functionality.');
    return null;
  }
};

module.exports = connectDB;
