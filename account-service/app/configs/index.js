const service = require('app/configs/service');
const mongo = require('app/configs/mongo');

module.exports = {
  ...service,
  ...mongo  
}