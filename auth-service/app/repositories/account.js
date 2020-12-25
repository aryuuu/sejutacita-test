const axios = require('axios');
const config = require('app/configs');
const ServiceError = require('app/utils/service-error');

const getUserByIdentifier = async (identifier) => {
  try {
    const res = await axios
      .get(`${config.ACCOUNT_SERVICE_URL}/${identifier}/password`);

    if (res.status != 200) {
      throw new ServiceError(res.status, res.statusText);
    }
    return res.data.data;
  } catch (error) {
  
  }
}

module.exports = {
  getUserByIdentifier,
}