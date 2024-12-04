require('dotenv').config();

const env = process.env;
const PORT = env.PORT;
const MONGODB_CONNECTION_STRING = env.CONNECTION_STRING + env.DATABASE;
module.exports = { PORT, MONGODB_CONNECTION_STRING };
