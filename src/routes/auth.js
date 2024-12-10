import express from 'express';
import { signInHandler, signUpHandler } from '../handlers/auth/index.js';

export const authRouter = express.Router();

authRouter.post('/signup', signUpHandler);
authRouter.post('/signin', signInHandler);
