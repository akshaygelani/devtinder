import { userModel } from '../../models/user.js';

export const patchUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const body = req.body;
    const allowedUpdate = [
      'age',
      'gender',
      'password',
      'about',
      'photoUrl',
      'skills',
    ];

    let isUpdateAllowed = Object.keys(body).every((k) =>
      allowedUpdate.includes(k)
    );
    if (!isUpdateAllowed) {
      return res.status(400).send('Invalid Body');
    }

    await userModel.findByIdAndUpdate(userId, body, {
      runValidators: true,
    });
    return res.status(202).send('Record updated successfully!');
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
