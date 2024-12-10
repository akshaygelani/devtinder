import express from 'express';
import {
  postUserHandler,
  getUserHandler,
  listUserHandler,
  deleteUserHandler,
  patchUserHandler,
} from '../handlers/user/index.js';
import { verifyAuthentication } from '../middleware/auth/authentication.js';

export const userRouter = express.Router();

// Middleware to check authentication
userRouter.use('/', verifyAuthentication);

// TODO: Add Middleware to check admin role.
userRouter.post('/', postUserHandler);
userRouter.get('/', listUserHandler);
userRouter.get('/:userId', getUserHandler);
userRouter.delete('/:userId', deleteUserHandler);
userRouter.patch('/:userId', patchUserHandler);
