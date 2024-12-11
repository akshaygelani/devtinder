import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.js';
import { badRequest, unauthorized } from '../utils/responses.js';

export const verifyAuthentication = async (req, res, next) => {
  // decode token
  let { access_token } = req.cookies;
  if (!access_token) {
    return badRequest(res, 'Token Missing');
  }
  let payload = jwt.verify(access_token, 'asb@344');
  if (!payload) {
    return badRequest(res, 'Invalid Token');
  }

  // find user and verify id
  let { id } = payload;
  let user = await userModel.findById(id);
  if (!user) {
    return unauthorized(res);
  }
  req.loggedInUser = user;

  // continue executing other middlewares
  next();
};
