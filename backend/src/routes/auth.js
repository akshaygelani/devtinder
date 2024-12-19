import express from 'express';
import {
  signUpHandler,
  signInHandler,
  signOutHandler,
} from '../handlers/auth/index.js';
import { asyncHandler } from '../utils/errors/asyncHandler.js';

export const authRouter = express.Router();

authRouter.post('/signup', asyncHandler(signUpHandler));
authRouter.post('/signin', asyncHandler(signInHandler));
authRouter.post('/signout', asyncHandler(signOutHandler));
