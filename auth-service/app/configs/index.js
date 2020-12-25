const service = require('./service');
const mongo = require('./mongo');
const urls = require('./urls');

module.exports = {
  ...service,
  ...mongo,
  ...urls,
};