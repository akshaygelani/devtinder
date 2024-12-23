import { userModel } from '../../models/user.js';
import { success, badRequest } from '../../utils/responses.js';
import { FRONTEND_BASE_URL } from '../../utils/constants.js';

const url = new URL(FRONTEND_BASE_URL);
const cookieDomain = url.hostname;

export const signInHandler = async (req, res) => {
  const { email, password } = req.body;

  // schema validations
  const existingUser = await userModel.findOne({ email: email });
  if (!existingUser) {
    return badRequest(res, 'Invalid Credentials!');
  }

  let isPasswordCorrect = await existingUser.comparePassword(password);
  if (!isPasswordCorrect) {
    return badRequest(res, 'Invalid Credentials!');
  }

  // get JWT from schema methods
  const access_token = existingUser.getJWT();

  // Add cookie in Response
  // cookie expire after 15 min
  res.cookie('access_token', access_token, {
    domain: cookieDomain,
    sameSite: 'none',
    secure: true,
    expires: new Date(Date.now() + 900000),
  });
  return success(res, 'Signin Successful!', existingUser);
};
