const axios = require('axios');
const { AUTH_SERVICE_URL } = require('app/configs');
const ServiceError = require('app/utils/service-error');

const authenticate = async (username, password) => {
  const result = await axios.post(
    `${AUTH_SERVICE_URL}/authenticate`, 
    {
      username,
      password,
    },
    {
      validateStatus: (status) => status >= 200 && status < 500,
    }
  );

  if (result.status != 200) {
    throw new ServiceError(result.status, result.data.message);
  }

  return result.data.data;
}

const verify = async (token) => {
  const result = await axios.post(
    `${AUTH_SERVICE_URL}/verify`, 
    {
      access_token: token,
    },
    {
      validateStatus: (status) => status >= 200 && status < 500,
    }
  );

  if (result.status != 200) {
    throw new ServiceError(result.status, result.data.message);
  }
  return result.data.data;
}

const refresh = async (token) => {
  const result = await axios.post(
    `${AUTH_SERVICE_URL}/refresh`, 
    {
      refresh_token: token,
    },
    {
      validateStatus: (status) => true,
    }
  );

  if (result.status != 200) {
    throw new ServiceError(result.status, result.data.message);
  }
  return result.data.data;
}

module.exports = {
  authenticate,
  verify,
  refresh,
};