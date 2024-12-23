import { config } from 'dotenv';
config();
export const env = process.env;
export const DEV_SERVER_PORT = env.DEV_SERVER_PORT;
export const API_BASE_URL = env.API_BASE_URL;
