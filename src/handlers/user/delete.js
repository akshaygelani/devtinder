import { userModel } from '../../models/user.js';

export const deleteUserHandler = async (req, res) => {
  const { userId } = req.params;
  await userModel.findByIdAndDelete(userId);
  res.status(202).send('Request accepted!');
};
