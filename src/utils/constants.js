require('dotenv').config();

const env = process.env;
const PORT = env.PORT;
const MONGODB_CONNECTION_STRING = env.MONGODB_CONNECTION_STRING;
module.exports = { PORT, MONGODB_CONNECTION_STRING };
