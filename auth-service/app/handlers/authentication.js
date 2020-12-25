const jwt = require('app/utils/jwt');
const bcrypt = require('bcrypt');
const ServiceError = require('app/utils/service-error');

const accountRepo = require('app/repositories/account'); 

const authenticateByUsername = async (username, password) => {
  const user = await accountRepo.getUserByIdentifier(username);

  if (!user) throw new ServiceError(400, `user ${username} does not exist`);

  const isMatch = bcrypt.compareSync(password, user.password);

  if (isMatch) {
    const token = await jwt.createToken({
      id: user._id,
      role: user.role,
    });
    return { token };
  } else {
    throw new ServiceError(400, `wrong password`);
  }
}

const verify = async (token) => {
  const result = await jwt.verifyToken(token);

  return result;
}

module.exports = {
  authenticateByUsername,
  verify,
}