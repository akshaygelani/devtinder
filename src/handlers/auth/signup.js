import { userModel } from '../../models/user.js';

export const signUpHandler = async (req, res) => {
  const user = new userModel(req.body);
  try {
  } catch (error) {
    console.log('Oops Error:', error.message);
  }
  await user.save();
  res.send('user saved successfully');
};
