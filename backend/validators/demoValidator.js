/**
 * Validates the demo request payload.
 * Returns { valid: boolean, error?: string, sanitized?: { email: string } }
 */
const validateDemoRequest = (body) => {
  const { email } = body;

  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required.' };
  }

  const trimmed = email.trim().toLowerCase();

  if (trimmed.length === 0) {
    return { valid: false, error: 'Email is required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Please provide a valid email address.' };
  }

  return { valid: true, sanitized: { email: trimmed } };
};

module.exports = { validateDemoRequest };
