module.exports = {
  SERVICE_NAME: process.env.SERVICE_NAME,
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  JWT_SECRET: process.env.JWT_SECRET,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRATION: 
    parseInt(process.env.ACCESS_TOKEN_EXPIRATION) || 3600,
  REFRESH_TOKEN_EXPIRATION: 
    parseInt(process.env.REFRESH_TOKEN_EXPIRATION) || 36000,
}