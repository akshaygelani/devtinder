import { config } from 'dotenv';
config();
export const env = process.env;
export const PORT = env.PORT;
export const MONGODB_CONNECTION_STRING = env.CONNECTION_STRING + env.DATABASE;
export const IS_PROD = process.env.NODE_ENV === 'production';
