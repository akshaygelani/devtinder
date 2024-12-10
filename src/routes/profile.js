import express from 'express';
import { getProfileHandler } from '../handlers/profile/index.js';
import { verifyAuthentication } from '../middleware/auth/authentication.js';
export const profileRouter = express.Router();

profileRouter.use('/', verifyAuthentication);
profileRouter.get('/', getProfileHandler);
