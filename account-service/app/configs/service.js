module.exports = {
  SERVICE_NAME: process.env.SERVICE_NAME,
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  ADMIN_USER: process.env.ADMIN_USER,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  DUMMY_USER: process.env.DUMMY_USER,
  DUMMY_PASSWORD: process.env.DUMMY_PASSWORD,
};