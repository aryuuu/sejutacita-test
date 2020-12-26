const jwt = require('jsonwebtoken');
const config = require('app/configs');
const ServiceError = require('app/utils/service-error');

const createToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.JWT_SECRET,
      {
        expiresIn: '1d',
      },
      (err, result) => {
        err == null ? resolve(result) : reject(err);
      }
    );
  })
}

const verifyToken = (token) => {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.JWT_SECRET, (err, result) => {
        err == null
          ? resolve(result)
          : reject(new ServiceError(422, `invalid token`));
      })
    });
  } catch (error) {
    throw new ServiceError(422, 'invalid token');
  }
}

module.exports = {
  createToken,
  verifyToken,
}