import { userModel } from '../../models/user.js';

export const patchUserHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const body = req.body;
    await userModel.findOneAndUpdate(userId, body, {
      runValidators: true,
    });
    res.status(202).send('Record updated successfully!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
