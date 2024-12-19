import mongoose from 'mongoose';
import { userModel } from '../../models/user.js';
import { badRequest, notFound, success } from '../../utils/responses.js';

export const getUserHandler = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    return badRequest(res, 'Invalid UserId');
  }

  const user = await userModel.findById(userId);

  if (!user) return notFound(res, 'User not found');
  return success(res, 'Request was successful.', user);
};
