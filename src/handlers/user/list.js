import { userModel } from '../../models/user.js';

export const listUserHandler = async (req, res) => {
  try {
    const users = await userModel.find({});
    if (users.length == 0) {
      res.send(404).send('No records found');
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
