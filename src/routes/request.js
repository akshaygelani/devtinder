import express from 'express';
import { asyncHandler } from '../utils/errors/asyncHandler.js';
import { verifyAuthentication } from '../middleware/authentication.js';
import { sendRequestHandler, reviewRequestHandler } from '../handlers/request/index.js';
export const requestRouter = express.Router();

requestRouter.use('/', asyncHandler(verifyAuthentication));
requestRouter.post('/send/:toUserId', asyncHandler(sendRequestHandler));
requestRouter.post('/review/:requestId', asyncHandler(reviewRequestHandler));
