import { config } from 'dotenv';
config();

export const env = process.env;
export const PORT = env.PORT;
export const MONGODB_CONNECTION_STRING = env.CONNECTION_STRING + env.DATABASE;
export const IS_PROD = process.env.NODE_ENV === 'production';
export const FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL;
const url = new URL(FRONTEND_BASE_URL);
export const FRONTEND_HOSTNAME = url.hostname;
export const RATE_LIMIT_CONFIG = {
  windowMs: env.WINDOW_MS,
  limit: env.LIMIT,
  handler: (req, res) => {
    console.log(`Rate limit exceeded for IP: ${req.ip}`);
    return res.status(429).json({
      error: 'Too many requests, please try again later.',
    });
  },
};
