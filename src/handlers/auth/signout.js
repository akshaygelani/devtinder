export const signOutHandler = (req, res) => {
  res.cookie('access_token', null, {
    expires: new Date(Date.now()),
  });
  res.send('Logged out!!');
};
