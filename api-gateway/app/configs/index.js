const service = require('./service');
const urls = require('./urls');

module.exports = {
  ...service,
  ...urls,
};