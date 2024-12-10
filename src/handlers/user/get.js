import { userModel } from '../../models/user.js';

export const getUserHandler = async (req, res) => {
  const { userId } = req.params;
  const user = await userModel.findById(userId);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.status(200).send(user);
  }
};
