import { userModel } from '../../models/user.js';

export const userPostHandler = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
  } catch (error) {
    console.log('Oops Error:', error.message);
  }
  res.send('User added Successfully');
};
