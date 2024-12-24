import express from 'express';
import {
  postUserHandler,
  getUserHandler,
  listUserHandler,
  deleteUserHandler,
  patchUserHandler,
  getConnectionsHandler,
  getPendingRequestsHandler,
  getUserFeedHandler,
} from '../handlers/user/index.js';
import { verifyAuthentication } from '../middleware/authentication.js';
import { asyncHandler } from '../utils/errors/asyncHandler.js';
import { IS_PROD } from '../utils/constants.js';

export const userRouter = express.Router();

// Middleware to check authentication
userRouter.use('/', asyncHandler(verifyAuthentication));

// TODO: Add Middleware to check admin role.
userRouter.get('/connections', asyncHandler(getConnectionsHandler));
userRouter.get('/requests/pending', asyncHandler(getPendingRequestsHandler));
userRouter.get('/feed', asyncHandler(getUserFeedHandler));

if (!IS_PROD) {
  userRouter.post('/', asyncHandler(postUserHandler));
  userRouter.get('/', asyncHandler(listUserHandler));
  userRouter.get('/:userId', asyncHandler(getUserHandler));
  userRouter.delete('/:userId', asyncHandler(deleteUserHandler));
  userRouter.patch('/:userId', asyncHandler(patchUserHandler));
}
