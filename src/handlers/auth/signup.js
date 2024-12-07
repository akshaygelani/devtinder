import { userModel } from '../../models/user.js';

export const signUpHandler = async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
  } catch (error) {
    console.log('Oops Error:', error.message);
  }
  res.send('user saved successfully');
};
