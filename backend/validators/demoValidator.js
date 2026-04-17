/**
 * Validates a demo/contact payload.
 * Supports:
 * - email-only submissions from the landing page contact section
 * - full help-widget contact submissions with name/query
 */
const validateDemoRequest = (body) => {
  const { email, name, phone, query } = body;

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

  const trimmedName =
    typeof name === 'string' && name.trim().length > 0 ? name.trim() : '';
  const trimmedQuery =
    typeof query === 'string' && query.trim().length > 0 ? query.trim() : '';
  const trimmedPhone =
    typeof phone === 'string' && phone.trim().length > 0 ? phone.trim() : '';

  const isFullContactRequest =
    trimmedName.length > 0 || trimmedQuery.length > 0 || trimmedPhone.length > 0;

  if (isFullContactRequest) {
    if (!trimmedName) {
      return { valid: false, error: 'Name is required.' };
    }

    if (!trimmedQuery) {
      return { valid: false, error: 'Query is required.' };
    }
  }

  return {
    valid: true,
    sanitized: {
      email: trimmedEmail,
      name: trimmedName,
      phone: trimmedPhone,
      query: trimmedQuery,
      submissionType: isFullContactRequest ? 'contact' : 'demo',
    },
  };
};

module.exports = { validateDemoRequest };
