import { userModel } from '../../models/user.js';

export const signInHandler = async (req, res) => {
  const { email, password } = req.body;

  // schema validations
  const existingUser = await userModel.findOne({ email: email });
  if (!existingUser) {
    return res.status(400).send('Invalid Credentials!');
  }

  let isPasswordCorrect = await existingUser.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).send('Invalid Credentials!');
  }

  // get JWT from schema methods
  const access_token = existingUser.getJWT();

  // Add cookie in Response
  // cookie expire after 15 min
  res.cookie('access_token', access_token, {
    expires: new Date(Date.now() + 900000),
  });

  res.status(200).send('Signin Successful!');
};
