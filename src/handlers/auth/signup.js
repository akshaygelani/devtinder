import { userModel } from '../../models/user.js';

export const signUpHandler = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.send('Signup Successful!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    req.send('Error in Signup!');
  }
};
