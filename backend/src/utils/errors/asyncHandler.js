// async handler which catches runtime errors from all handlers and forwards flow to centralized error handler
export const asyncHandler = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};
