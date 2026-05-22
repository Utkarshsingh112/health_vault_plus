const validateDemoRequest = (body) => {
  const { email } = body;

  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required.' };
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (trimmedEmail.length === 0) {
    return { valid: false, error: 'Email is required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { valid: false, error: 'Please provide a valid email address.' };
  }

  return {
    valid: true,
    sanitized: {
      email: trimmedEmail,
    },
  };
};

module.exports = { validateDemoRequest };
