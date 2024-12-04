function authenticate(req, res, next) {
  // Authenticate user
  let isUserAuthenticated = true;
  if (isUserAuthenticated) {
    console.log('User is Authenticated');
    next();
  } else {
    res.send({ code: 401, message: 'Unauthorized' });
  }
}

module.exports = { authenticate };
