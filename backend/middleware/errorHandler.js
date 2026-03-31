/**
 * Global error handler middleware.
 * Returns consistent JSON error responses.
 */
const errorHandler = (err, req, res, next) => {
  console.error('❌ Server Error:', err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: statusCode === 500
      ? 'Internal server error. Please try again later.'
      : err.message,
  });
};

module.exports = errorHandler;
