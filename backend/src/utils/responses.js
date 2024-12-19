// Default messages for success responses
const M_SUCCESS = 'Request was successful.';
const M_CREATED = 'Resource created successfully.';
const M_ACCEPTED = 'Request accepted for processing.';
const M_NO_CONTENT = 'No content to return.';

// Default messages for error responses
const M_BAD_REQUEST = 'Bad request. Please check your input.';
const M_UNAUTHORIZED = 'Unauthorized. Authentication required.';
const M_FORBIDDEN = 'Forbidden. You do not have permission to access this resource.';
const M_NOT_FOUND = 'Resource not found.';
const M_CONFLICT = 'Conflict occurred. Resource already exists.';
const M_INTERNAL_ERROR = 'Internal server error. Please try again later.';

// SUCCESS RESPONSES

// 200 - OK
export const success = (res, message = M_SUCCESS, data = null, pagination = null) => {
  const response = {
    success: true,
    statusCode: 200,
    message,
  };
  if (data) response.data = Array.isArray(data) ? data : [data];
  if (pagination) response.pagination = pagination;

  return res.status(200).json(response);
};

// 201 - Created
export const created = (res, message = M_CREATED, data = null) => {
  const response = {
    success: true,
    statusCode: 201,
    message,
  };
  if (data) response.data = Array.isArray(data) ? data : [data];

  return res.status(201).json(response);
};

// 202 - Accepted
export const accepted = (res, message = M_ACCEPTED, data = null) => {
  const response = {
    success: true,
    statusCode: 202,
    message,
  };
  if (data) response.data = Array.isArray(data) ? data : [data];

  return res.status(202).json(response);
};

// 204 - No Content
export const noContent = (res, message = M_NO_CONTENT) => {
  return res.status(204).json({
    success: true,
    statusCode: 204,
    message,
  });
};

// ERROR RESPONSES

// 400 - Bad Request
export const badRequest = (res, message = M_BAD_REQUEST, errors = null) => {
  const response = {
    success: false,
    statusCode: 400,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(400).json(response);
};

// 401 - Unauthorized
export const unauthorized = (res, message = M_UNAUTHORIZED, errors = null) => {
  const response = {
    success: false,
    statusCode: 401,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(401).json(response);
};

// 403 - Forbidden
export const forbidden = (res, message = M_FORBIDDEN, errors = null) => {
  const response = {
    success: false,
    statusCode: 403,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(403).json(response);
};

// 404 - Not Found
export const notFound = (res, message = M_NOT_FOUND, errors = null) => {
  const response = {
    success: false,
    statusCode: 404,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(404).json(response);
};

// 409 - Conflict (e.g., Duplicate Resource)
export const conflict = (res, message = M_CONFLICT, errors = null) => {
  const response = {
    success: false,
    statusCode: 409,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(409).json(response);
};

// 500 - Internal Server Error
export const internalError = (res, message = M_INTERNAL_ERROR, errors = null) => {
  const response = {
    success: false,
    statusCode: 500,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(500).json(response);
};
