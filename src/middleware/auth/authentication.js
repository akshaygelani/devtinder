export const verifyAuthentication = (req, res, next) => {
  try {
    let { access_token } = req.cookies;
    console.log(access_token);
    next();
  } catch (error) {
    console.log('Oops Error:', error.message);
    res.status(500).send('Something went wrong!');
  }
};
