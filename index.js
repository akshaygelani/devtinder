require('dotenv').config()

const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.use((req, res) => {
  res.send('Hello from the server');
});

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
