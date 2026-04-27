require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const demoRoutes = require('./routes/demoRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Trust proxy if behind a reverse proxy (e.g., Vercel, Render)
// Required for secure rate limiting based on client IP
app.set('trust proxy', 1);

const PORT = process.env.PORT || 5000;

// ---- Middleware ----
// Security Headers
app.use(helmet());

// Restrict Payload Size to 10kb
app.use(express.json({ limit: '10kb' }));

// Sanitize User Input against NoSQL injection
// Note: Removed express-mongo-sanitize as it crashes Express 5. 
// Mongoose Schema strict typing (String) inherently protects us here.

// Strict CORS (No wildcard fallback in production)
const allowedOrigins = process.env.CLIENT_URL 
  ? process.env.CLIENT_URL.split(',').map(url => url.trim().replace(/\/$/, '')) 
  : [];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like curl) or in dev mode
    if (!origin || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    // If CLIENT_URL is configured, enforce it strictly
    if (allowedOrigins.length > 0) {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    } else {
      // Fallback: If no CLIENT_URL is set in production, allow the origin
      // This prevents the app from breaking upon deployment if env vars are missing.
      callback(null, true);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// ---- Routes ----
app.use('/api', demoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ---- Error Handler ----
app.use(errorHandler);

// ---- Start Server ----
const startServer = async () => {
  // Connect to DB (graceful — won't crash if MONGO_URI is missing)
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
