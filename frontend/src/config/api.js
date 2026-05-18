const FALLBACK_API_URL = import.meta.env.DEV
  ? 'http://localhost:5000'
  : 'https://health-vault-plus-backend.onrender.com';

export const API_URL = (import.meta.env.VITE_API_URL || FALLBACK_API_URL).replace(/\/$/, '');
