import { userModel } from '../../models/user.js';

export const signUpHandler = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.status(200).send('Signup Successful!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
