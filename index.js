import express from 'express';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/config/database.js';
import { PORT } from './src/utils/constants.js';
import { authRouter, userRouter } from './src/routes/index.js';

const app = express();
console.clear();

// Middlewares to parse json and cookie from requests
app.use(express.json());
app.use(cookieParser());

// Route Handlers
app.use('/auth', authRouter);
app.use('/user', userRouter);

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
