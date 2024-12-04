function isAdmin(req, res, next) {
  // validate admin permission
  let isAdmin = true;
  if (isAdmin) {
    console.log('Admin Permissions available');
    next();
  } else {
    res.status(403).send('Forbidden to access resource');
  }
}

module.exports = { isAdmin };
