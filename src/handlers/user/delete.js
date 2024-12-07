import { userModel } from '../../models/user.js';

export const deleteUserHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    await userModel.findByIdAndDelete(userId);
    res.status(202).send('Request accepted!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
