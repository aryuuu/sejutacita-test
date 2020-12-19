const Model = require('app/models/user');

const createUser = async  (username, password) => {
  const currTime = Date.now();

  await Model.create({
    username: username,
    password: password,
    created_at: currTime,
    updated_at: currTime
  });

  return { created_at: currTime };
}

const getUsers = async (options = {}) => {
  const users = await Model.find(
    {}, 
    {
      _id: 1,
      username: 1,
      created_at: 1,
      updated_at: 1
    }
  );

  return users;
}

const getUserById = async (userId) => {
  const user = await Model.findOne(
    {
    _id: userId
    },
    {
      username: 1,
      created_at: 1,
      updated_at: 1
    }
  );

  return user;
}

const updateUser = async (userId, data) => {
  const user = getUserById(userId);

  const currTime = Date.now();

  const mutationObj = {
    updated_at: currTime
  }

  await Model.updateOne({ _id: userId }, mutationObj);

  return { updated_at: currTime };
  
}

const deleteUser = async (userId) => {
  const doc = await Model.findOneAndDelete({ _id: userId}).exec();
  console.log(doc);
  return doc == null ? 0 : 1;
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
}