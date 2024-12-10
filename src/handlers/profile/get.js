export const getProfileHandler = (req, res) => {
  let loggedInUser = req.loggedInUser;
  res.status(200).send(loggedInUser);
};
