const bcrypt = require('bcrypt');
const { assertNotNull } = require('app/utils/validator');
const { toArrayInteger } = require('app/utils/converter');
const { getOnlyDefinedFields } = require('app/utils/picker');

const userRepo = require('app/repositories/user');
const ServiceError = require('app/utils/service-error');

const salt = bcrypt.genSaltSync(10);

const createUser = async (data) => {
  assertNotNull(data, 'username');
  assertNotNull(data, 'password');

  const user = await userRepo.getUserByUsername(data.username);

  if (user != null) {
    throw new ServiceError(400, `username ${data.username} already exist`);
  }
  
  if (data.role == null) {
    data.role = {
      name: 'user',
      id: 0,
    };
  }

  const password = await bcrypt.hashSync(data.password, salt);
  const createdAt = userRepo.createUser(data.username, password, data.role);

  return createdAt;
}

const getUsers = (query = {}) => {
  const options = {
    ids_user: query.ids ? toArrayInteger(query.ids) : null,
  };

  const users = userRepo.getUsers(options);

  return users;
}

const getUserByIdentifier = async (identifier) => {
  let user;
  if (parseInt(identifier)) {
    user = await userRepo.getUserById(identifier);
  } else {
    user = await userRepo.getUserByUsername(identifier) 
  }
 
  return user;
}

const updateUser = (userId, data) => {
  const filteredData = getOnlyDefinedFields(
    data, 
    [
      'username', 
      'password',
      'role',
    ]
  );

  if (filteredData.password != null) {
    filteredData.password = bcrypt.hashSync(filteredData.password, salt);
  }

  const result = userRepo.updateUser(userId, filteredData);

  return result;
}

const deleteUser = (userId) => {
  return userRepo.deleteUser(userId);
}

module.exports = {
  createUser,
  getUsers,
  getUserByIdentifier,
  updateUser,
  deleteUser,
}