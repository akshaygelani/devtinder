import { config } from 'dotenv';
config();
export const env = process.env;
export const PORT = env.PORT;
export const MONGODB_CONNECTION_STRING = env.CONNECTION_STRING + env.DATABASE;
