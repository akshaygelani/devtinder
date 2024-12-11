import { userModel } from '../../models/user.js';

export const postUserHandler = async (req, res) => {
  // TODO: sanitize data, add validations and hash password
  const user = new userModel(req.body);
  await user.save();
  res.status(200).send('User added Successfully');
};
