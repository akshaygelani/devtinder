import express from 'express';
import {
  signUpHandler,
  signInHandler,
  signOutHandler,
} from '../handlers/auth/index.js';

export const authRouter = express.Router();

authRouter.post('/signup', signUpHandler);
authRouter.post('/signin', signInHandler);
authRouter.post('/signout', signOutHandler);
