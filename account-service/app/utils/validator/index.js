const assert = require('assert');
const ServiceError = require('app/utils/service-error');

const assertNotNull = (object, field) => {
  try {
    return assert(
      object[field] != null,
      `${field} should not be null`
    );
  } catch (error) {
    throw new ServiceError(400, error);
    // throw new Error(error);
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