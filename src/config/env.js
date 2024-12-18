export const env = {
  STRIPE_PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
  API_URL: import.meta.env.VITE_API_URL || '',
  SITE_URL: import.meta.env.VITE_SITE_URL || 'http://localhost:3000'
};