import express from 'express';
import { connectDB } from './src/config/database.js';
import { PORT } from './src/utils/constants.js';
import { userModel } from './src/models/user.js';
const app = express();

console.clear();

app.post('/signup', async (req, res, next) => {
  const data = {
    firstName: 'Akshay',
    lastName: 'Gelani',
    email: 'akshay@gmail.com',
    password: '123456789',
  };
  const user = new userModel(data);
  try {
  } catch (error) {
    console.log('Oops Error:', error.message);
  }
  await user.save();
  res.send('user saved successfully');
});

connectDB()
  .then(() => {
    console.log('MongoDB Database Connected!!');
    app.listen(PORT, () => {
      console.log(`Server Started on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Oops, There is some error in connecting to Database!');
  });
