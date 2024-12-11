import express from 'express';
import { asyncHandler } from '../utils/errors/asyncHandler.js';
import { verifyAuthentication } from '../middleware/authentication.js';
import { sendRequestHandler } from '../handlers/request/index.js';
export const requestRouter = express.Router();

requestRouter.use('/', asyncHandler(verifyAuthentication));
requestRouter.post('/send/:toUserId', asyncHandler(sendRequestHandler));
