const express = require('express');
const { PORT } = require('./src/utils/constants');
const app = express();

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
