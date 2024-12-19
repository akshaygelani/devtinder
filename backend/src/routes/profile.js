import express from 'express';
import {
  getProfileHandler,
  patchProfileHandler,
} from '../handlers/profile/index.js';
import { verifyAuthentication } from '../middleware/authentication.js';
import { asyncHandler } from '../utils/errors/asyncHandler.js';

export const profileRouter = express.Router();

profileRouter.use('/', asyncHandler(verifyAuthentication));
profileRouter.get('/', asyncHandler(getProfileHandler));
profileRouter.patch('/', asyncHandler(patchProfileHandler));
