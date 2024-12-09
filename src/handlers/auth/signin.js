import { userModel } from '../../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signInHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // schema validations
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).send('Invalid Credentials!');
    }

    let isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send('Invalid Credentials!');
    }

    // Generate JWT Token and wrap it inside cookie
    const access_token = jwt.sign({ id: existingUser._id }, 'asb@344', {
      expiresIn: '1d',
    });

    // Add cookie in Response
    // cookie expire after 15 min
    res.cookie('access_token', access_token, {
      expires: new Date(Date.now() + 900000),
    });

    res.status(200).send('Signin Successful!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
