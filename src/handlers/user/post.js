import { userModel } from '../../models/user.js';

export const postUserHandler = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.status(200).send('User added Successfully');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
