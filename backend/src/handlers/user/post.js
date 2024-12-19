import { userModel } from '../../models/user.js';
import { badRequest, success } from '../../utils/responses.js';
import bcrypt from 'bcrypt';

export const postUserHandler = async (req, res) => {
  const { firstName, lastName, email, password, age, gender, about, photoUrl, skills } = req.body;

  const existingUser = await userModel.findOne({ email: email });
  if (existingUser) {
    return badRequest(res, 'User Already Exists!');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = new userModel({
    firstName,
    lastName,
    email,
    password: passwordHash,
    age,
    gender,
    about,
    photoUrl,
    skills,
  });

  await user.save();
  return success('User added Successfully!');
};
