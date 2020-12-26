const axios = require('axios');
const { AUTH_SERVICE_URL } = require('app/configs');
const ServiceError = require('app/utils/service-error');

const authenticate = async (username, password) => {
  const result = await axios.post(`${AUTH_SERVICE_URL}/authenticate`, {
    username,
    password,
  });

  if (result.status != 200) {
    throw new ServiceError(result.status, result.statusText);
  }

  return result.data.data;
}

const verify = async (token) => {
  const result = await axios.post(`${AUTH_SERVICE_URL}/verify`, {
    token: token,
  });

  if (result.status != 200) {
    throw new ServiceError(result.status, result.statusText);
  }
  return result.data.data;
}

module.exports = {
  authenticate,
  verify,
};