import express from 'express';
import {
  getProfileHandler,
  patchProfileHandler,
} from '../handlers/profile/index.js';
import { verifyAuthentication } from '../middleware/auth/authentication.js';
import { asyncHandler } from '../middleware/utils/asyncHandler.js';

export const profileRouter = express.Router();

profileRouter.use('/', asyncHandler(verifyAuthentication));
profileRouter.get('/', asyncHandler(getProfileHandler));
profileRouter.patch('/', asyncHandler(patchProfileHandler));
