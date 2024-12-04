import express from 'express';
import { connectDB } from './src/config/database.js';
import { PORT } from './src/utils/constants.js';
const app = express();

console.clear();

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
