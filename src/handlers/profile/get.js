export const getProfileHandler = (req, res) => {
  try {
    let loggedInUser = req.loggedInUser;
    res.status(200).send(loggedInUser);
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
