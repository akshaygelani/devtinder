import { userModel } from '../../models/user.js';

export const listUserHandler = async (req, res) => {
  const users = await userModel.find({});
  if (users.length == 0) {
    res.status(404).send('No records found');
  } else {
    res.status(200).send(users);
  }
};
