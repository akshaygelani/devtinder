import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/config/database.js';
import { FRONTEND_BASE_URL, PORT } from './src/utils/constants.js';
import { authRouter, profileRouter, requestRouter, userRouter } from './src/routes/index.js';
import { errorHandler } from './src/utils/errors/errorHandler.js';

const app = express();

// Middlewares to parse json and cookie from requests
app.use(
  cors({
    origin: FRONTEND_BASE_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Route Handlers
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/request', requestRouter);
app.use('/user', userRouter);

// centralized error handler which catches all runtime errors
app.use(errorHandler);

connectDB()
  .then(() => {
    console.clear();
    console.log('MongoDB Database Connected!!');
    app.listen(PORT, () => {
      console.log(`Server Started on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Oops, There is some error in connecting to Database!');
  });
