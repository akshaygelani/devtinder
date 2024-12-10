export const patchProfileHandler = async (req, res) => {
  try {
    let allowedUpdates = [
      'firstName',
      'lastName',
      'age',
      'gender',
      'photoUrl',
      'about',
      'skills',
    ];

    let isUpdateAllowed = Object.keys(req.body).every((field) =>
      allowedUpdates.includes(field)
    );

    if (!isUpdateAllowed) {
      return res.status(400).send('Invalid Body');
    }
    let loggedInUser = req.loggedInUser;

    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });

    await loggedInUser.save();
    res.json({ message: 'Record Updated!', data: loggedInUser });
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
