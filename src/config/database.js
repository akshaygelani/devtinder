import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from '../utils/constants.js';

export const connectDB = async () => {
  await mongoose.connect(MONGODB_CONNECTION_STRING);
};
