import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.js';

export const verifyAuthentication = async (req, res, next) => {
  // decode token
  let { access_token } = req.cookies;
  let payload = jwt.verify(access_token, 'asb@344');
  if (!payload) {
    return res.status(400).send('Invalid Token');
  }

  // find user and verify id
  let { id } = payload;
  let user = await userModel.findById(id);
  if (!user) {
    return res.status(400).send('Unauthorized!');
  } else {
    req.loggedInUser = user;
  }

  // continue executing other middlewares
  next();
};
