const ServiceError = require('app/utils/service-error');

const assertNotNull = (object, field) => {
  if (object[field] == null) {
    throw new ServiceError(400, `${field} should not be null`);
  }
}

const getOnlyDefinedFields = (obj, fields) => {
  const result = {};

  fields.forEach(field => {
    if (obj[field] !== undefined) {
      result[field] = obj[field];
    }
  });

  return result;
}

const getSpecifiedFields = (obj, fields) => {
  const result = {};

  fields.forEach(field => {
    result[field] = obj[field];
  });

  return result;
}

module.exports = {
  assertNotNull,
  getSpecifiedFields,
  getOnlyDefinedFields
}