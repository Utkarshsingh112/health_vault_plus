/**
 * Global error handler middleware.
 * Returns consistent JSON error responses.
 */
const errorHandler = (err, req, res, next) => {
  console.error('❌ Server Error:', err.message);

  let statusCode = err.statusCode || 500;
  let customMessage = err.message;

  if (err.name === 'ValidationError') {
    statusCode = 400;
    customMessage = Object.values(err.errors).map(val => val.message).join(', ');
  } else if (statusCode >= 500) {
    customMessage = 'Internal server error. Please try again later.';
  }

  res.status(statusCode).json({
    success: false,
    error: customMessage,
  });
};

module.exports = errorHandler;
