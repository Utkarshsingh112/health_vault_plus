require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const demoRoutes = require('./routes/demoRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware ----
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

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
