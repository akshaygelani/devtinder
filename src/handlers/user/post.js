import { userModel } from '../../models/user.js';

export const postUserHandler = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.send('User added Successfully');
  } catch (error) {
    console.log('Oops Error:', error.message);
    req.send('Error adding User!');
  }
};
