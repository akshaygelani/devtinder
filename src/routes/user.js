import express from 'express';
import {
  postUserHandler,
  getUserHandler,
  listUserHandler,
  deleteUserHandler,
  patchUserHandler,
} from '../handlers/user/index.js';
import { verifyAuthentication } from '../middleware/auth/authentication.js';
import { asyncHandler } from '../middleware/utils/asyncHandler.js';

export const userRouter = express.Router();

// Middleware to check authentication
userRouter.use('/', asyncHandler(verifyAuthentication));

// TODO: Add Middleware to check admin role.
userRouter.post('/', asyncHandler(postUserHandler));
userRouter.get('/', asyncHandler(listUserHandler));
userRouter.get('/:userId', asyncHandler(getUserHandler));
userRouter.delete('/:userId', asyncHandler(deleteUserHandler));
userRouter.patch('/:userId', asyncHandler(patchUserHandler));
