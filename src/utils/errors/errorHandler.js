import { IS_PROD } from '../constants.js';

export const errorHandler = (err, req, res, next) => {
  console.error('----- Error Start');
  console.error(`Error occurred during ${req.method} request to ${req.url}`);
  console.error('Error:', err.message);
  console.error('Stack trace:', err.stack);
  console.error('----- Error End');

  const responseMessage = IS_PROD
    ? 'Oops, Internal Server Error! Please contact the administrator.'
    : err.message;

  res.status(500).json({ message: responseMessage });
};
