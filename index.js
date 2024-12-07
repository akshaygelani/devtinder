import express from 'express';
import { connectDB } from './src/config/database.js';
import { PORT } from './src/utils/constants.js';
import { signUpHandler } from './src/handlers/auth/index.js';
import { postUserHandler, getUserHandler } from './src/handlers/user/index.js';
const app = express();

console.clear();

// Middleware to parse json from requests
app.use(express.json());

// Auth Middlewares
app.post('/signup', signUpHandler);

// User Middlewares
app.post('/user', postUserHandler);
app.get('/user/:userId', getUserHandler);

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
