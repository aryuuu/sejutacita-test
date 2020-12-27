const jwt = require('app/utils/jwt');
const bcrypt = require('bcrypt');
const ServiceError = require('app/utils/service-error');

const accountRepo = require('app/repositories/account'); 

const authenticateByUsername = async (username, password) => {
  const user = await accountRepo.getUserByIdentifier(username);

  if (!user._id) {
    throw new ServiceError(400, `user ${username} does not exist`);
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (isMatch) {
    const accessToken = jwt.createToken({
      id: user._id,
      role: user.role,
    });
    const refreshToken = jwt.createToken(
      {
        id: user._id,
        role: user.role,
      },
      'refresh'
    );
    return { access_token:  accessToken, refresh_token: refreshToken };
  } else {
    throw new ServiceError(400, `wrong password`);
  }
}

const verify = async (token, type = 'access') => {
  const result = await jwt.verifyToken(token, type);

  return result;
}

const refresh = async (token) => {
  const refreshToken = await verify(token, 'refresh');

  const newAccessToken = jwt.createToken({
    id: refreshToken.id,
    role: refreshToken.role,
  });

  return { access_token: newAccessToken };
}

module.exports = {
  authenticateByUsername,
  verify,
  refresh,
}