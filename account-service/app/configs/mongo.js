module.exports = {
  MONGO_HOST: process.env.MONGO_HOST || 'mongodb://localhost:27017',
  MONGO_DATABASE: process.env.MONGO_DATABASE || process.env.SERVICE_NAME,
  MONGO_OPTIONS: process.env.MONGO_OPTIONS || '',
}