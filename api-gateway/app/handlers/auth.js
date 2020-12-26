const authRepo = require('app/repositories/auth');

const authenticate = (username, password) => {
  return authRepo.authenticate(username, password);
}

const verify = (token) => {
  return authRepo.verify(token);
}

module.exports = {
  authenticate,
  verify,
};