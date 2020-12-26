const authHandler = require('app/handlers/auth');
const ServiceError = require('app/utils/service-error');

module.exports = (required, allowedRoles = []) => async (req, res, next) => {
  try {
    if (required) {
      const authorization = req.get('authorization');
      if (authorization == null) {
        throw new ServiceError(401, 'Authorization token required');
      }

      const client = await authHandler.verify(authorization);

      if (allowedRoles.length && !allowedRoles.includes(client.role.name)) {
        throw new ServiceError(
          401, 
          `${client.role.name}s are not allowed to access this resource`
        );
      }
        
      req.headers['client-id'] = client.id;
      req.headers['client-role-id'] = client.role.id;
      req.headers['client-role-name'] = client.role.name;
    }

    next();
  } catch (error) {
    next(error);
  }
}