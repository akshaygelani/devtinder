import { userModel } from '../../models/user.js';

export const getUserHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userModel.findById(userId);
    if (user.length == 0) {
      res.send(404).send('User not found');
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
