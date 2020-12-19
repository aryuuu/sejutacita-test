const bcrypt = require('bcrypt');
const userRepo = require('app/repositories/user');

const salt = bcrypt.genSaltSync(10);

const createUser = async (data) => {
  const password = await bcrypt.hashSync(data.password, salt);

  const createdAt = userRepo.createUser(data.username, password);

  return createdAt;
}

const getUsers = (query) => {
  const options = {
    ids_user: query.ids ? query.ids.split(',') : null,
  };

  const users = userRepo.getUsers(options);

  return users;
}

const getUserById = (userId) => {
  const user = userRepo.getUserById(userId);
  
  return user;
}

const updateUser = (userId, data) => {
  const result = userRepo.updateUser(userId, data);

  return result;
}

const deleteUser = (userId) => {
  return userRepo.deleteUser(userId);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
}