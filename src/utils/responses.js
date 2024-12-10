// SUCCESS RESPONSES

// 200 - OK
export const success = (res, message, data = null, pagination = null) => {
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
export const created = (res, message, data = null) => {
  const response = {
    success: true,
    statusCode: 201,
    message,
  };
  if (data) response.data = Array.isArray(data) ? data : [data];

  return res.status(201).json(response);
};

// 202 - Accepted
export const accepted = (res, message, data = null) => {
  const response = {
    success: true,
    statusCode: 202,
    message,
  };
  if (data) response.data = Array.isArray(data) ? data : [data];

  return res.status(202).json(response);
};

// 204 - No Content
export const noContent = (res, message) => {
  return res.status(204).json({
    success: true,
    statusCode: 204,
    message,
  });
};

// ERROR RESPONSES

// 400 - Bad Request
export const badRequest = (res, message, errors = null) => {
  const response = {
    success: false,
    statusCode: 400,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(400).json(response);
};

// 401 - Unauthorized
export const unauthorized = (res, message, errors = null) => {
  const response = {
    success: false,
    statusCode: 401,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(401).json(response);
};

// 403 - Forbidden
export const forbidden = (res, message, errors = null) => {
  const response = {
    success: false,
    statusCode: 403,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(403).json(response);
};

// 404 - Not Found
export const notFound = (res, message, errors = null) => {
  const response = {
    success: false,
    statusCode: 404,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(404).json(response);
};

// 409 - Conflict (e.g., Duplicate Resource)
export const conflict = (res, message, errors = null) => {
  const response = {
    success: false,
    statusCode: 409,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(409).json(response);
};

// 500 - Internal Server Error
export const internalError = (res, message, errors = null) => {
  const response = {
    success: false,
    statusCode: 500,
    message,
  };
  if (errors) response.errors = Array.isArray(errors) ? errors : [errors];

  return res.status(500).json(response);
};
