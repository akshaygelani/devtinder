require('dotenv').config();

const express = require('express');
const { authenticate } = require('./middlewares/authentication');
const { isAdmin } = require('./middlewares/authorization');
const PORT = process.env.PORT;
const app = express();

app.use(authenticate);
app.use('/admin', isAdmin);
app.get('/user', (req, res) => {
  res.send('This is user data');
});
app.get('/admin/getUserInfo', (req, res) => {
  res.send({ firstName: 'Akshay', lastName: 'Gelani' });
});

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
