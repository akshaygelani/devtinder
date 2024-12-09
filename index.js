import express from 'express';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/config/database.js';
import { PORT } from './src/utils/constants.js';
import { verifyAuthentication } from './src/middleware/auth/authentication.js';
import { signInHandler, signUpHandler } from './src/handlers/auth/index.js';
import {
  postUserHandler,
  getUserHandler,
  listUserHandler,
  deleteUserHandler,
  patchUserHandler,
} from './src/handlers/user/index.js';
const app = express();

console.clear();

// Middleware to parse json and cookie from requests
app.use(express.json());
app.use(cookieParser());

// Auth Middlewares
app.post('/signup', signUpHandler);
app.post('/signin', signInHandler);

// User Middlewares
app.use('/user', verifyAuthentication);
app.post('/user', postUserHandler);
app.get('/user/', listUserHandler);
app.get('/user/:userId', getUserHandler);
app.delete('/user/:userId', deleteUserHandler);
app.patch('/user/:userId', patchUserHandler);

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
