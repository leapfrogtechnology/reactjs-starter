/**
 * Application wide configuration.
 */
const config = {
  env: process.env.NODE_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  baseURI: process.env.REACT_APP_API_BASE_URI,
  sentryDSN: process.env.REACT_APP_SENTRY_DSN,
  endpoints: {
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
    },
    users: {
      self: '/users/self',
    },
    employee: '/employees',
  },
};

export default config;
