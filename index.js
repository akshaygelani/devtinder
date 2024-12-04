const express = require('express');
const connectDB = require('./src/config/database');
const { PORT } = require('./src/utils/constants');
const app = express();

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
