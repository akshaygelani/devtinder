import { userModel } from '../../models/user.js';
import bcrypt from 'bcrypt';

export const signUpHandler = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // schema validations
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send('Invalid body!');
    }

    // hash the password with auto generated salt
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new userModel({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.status(200).send('Signup Successful!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
