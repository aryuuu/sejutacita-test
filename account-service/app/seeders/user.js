const {
  ADMIN_USER,
  ADMIN_PASSWORD,
  DUMMY_USER,
  DUMMY_PASSWORD,
} = require('app/configs');
const userHandler = require('app/handlers/user');

const seedAdmin = async () => {
  const admin = await userHandler.getUserByIdentifier(ADMIN_USER);
  
  if (admin) return;
  
  await userHandler.createUser(
    {
      username: ADMIN_USER,
      password: ADMIN_PASSWORD,
      role: {
        id: 1,
        name: 'admin',
      }
    }
  );
}

const seedUser = async () => {
  const users = await userHandler.getUsers();
  
  if (users.length > 1) return;
  
  await userHandler.createUser(
    {
      username: DUMMY_USER,
      password: DUMMY_PASSWORD,
      role: {
        id: 0,
        name: 'user',
      }
    }
  );
}

module.exports = async () => {
    await seedAdmin();
    await seedUser();
}