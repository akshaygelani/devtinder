import { userModel } from '../../models/user.js';
import { accepted, badRequest } from '../../utils/responses.js';

export const patchUserHandler = async (req, res) => {
  const { userId } = req.params;
  const body = req.body;
  const allowedUpdate = ['age', 'gender', 'password', 'about', 'photoUrl', 'skills'];

  let isUpdateAllowed = Object.keys(body).every((k) => allowedUpdate.includes(k));
  if (!isUpdateAllowed) {
    return badRequest(res, 'Invalid Body!');
  }

  await userModel.findByIdAndUpdate(userId, body, {
    runValidators: true,
  });
  return accepted('Record updated successfully!');
};
