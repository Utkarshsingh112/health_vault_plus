/**
 * Validates a support/contact payload.
 */
const validateSupportRequest = (body) => {
  const { name, email, phone, query } = body;

  // Email is required and must be valid
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

  // Name is required
  if (!name || typeof name !== 'string') {
    return { valid: false, error: 'Name is required.' };
  }
  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    return { valid: false, error: 'Name is required.' };
  }

  // Query is required
  if (!query || typeof query !== 'string') {
    return { valid: false, error: 'Query/Message is required.' };
  }
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) {
    return { valid: false, error: 'Query/Message is required.' };
  }

  const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';

  return {
    valid: true,
    sanitized: {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      query: trimmedQuery,
    },
  };
};

module.exports = { validateSupportRequest };
