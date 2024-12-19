import { userModel } from '../../models/user.js';
import { success, badRequest } from '../../utils/responses.js';
import bcrypt from 'bcrypt';

export const signUpHandler = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // schema validations
  const existingUser = await userModel.findOne({ email: email });

  if (existingUser) {
    return badRequest(res, 'Invalid body');
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
  return success(res, 'Signup Successful!');
};
