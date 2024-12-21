import mongoose from 'mongoose';
import { userModel } from '../../models/user.js';
import { accepted, badRequest } from '../../utils/responses.js';

export const deleteUserHandler = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    return badRequest(res, 'Invalid userId');
  }

  await userModel.findByIdAndDelete(userId);

  return accepted(res);
};
