import { userModel } from '../../models/user.js';
import { success, notFound } from '../../utils/responses.js';

export const listUserHandler = async (req, res) => {
  const users = await userModel.find({});
  if (users.length == 0) {
    return notFound(res, 'No records found');
  } else {
    return success(res, 'Records fetch successfully!', users);
  }
};
