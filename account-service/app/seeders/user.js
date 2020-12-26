const {
  ADMIN_USER,
  ADMIN_PASSWORD,
} = require('app/configs');
const userHandler = require('app/handlers/user');

module.exports = async () => {
  const user = await userHandler.getUserByIdentifier(ADMIN_USER);

  if (user) return;

  await userHandler.createUser(
    {
      username: ADMIN_USER,
      password: ADMIN_PASSWORD,
      role: {
        id: 1,
        name: 'admin',
      }
    }
  )
    
}