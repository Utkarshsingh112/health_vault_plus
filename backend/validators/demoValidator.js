/**
 * Validates the demo request payload from the HelpWidget contact form.
 * Returns { valid: boolean, error?: string, sanitized?: object }
 */
const validateDemoRequest = (body) => {
  const { email, name, phone, query } = body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'Name is required.' };
  }

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

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return { valid: false, error: 'Query is required.' };
  }

  return {
    valid: true,
    sanitized: {
      name: name.trim(),
      email: trimmedEmail,
      phone: phone && typeof phone === 'string' ? phone.trim() : '',
      query: query.trim(),
    },
  };
};

module.exports = { validateDemoRequest };
