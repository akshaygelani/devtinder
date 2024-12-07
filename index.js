import express from 'express';
import { connectDB } from './src/config/database.js';
import { PORT } from './src/utils/constants.js';
import { signUpHandler } from './src/handlers/auth/signup.js';
const app = express();

console.clear();

app.use(express.json());
app.post('/signup', signUpHandler);

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
