module.exports = {
  SERVICE_NAME: process.env.SERVICE_NAME,
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  JWT_SECRET: process.env.JWT_SECRET,
}