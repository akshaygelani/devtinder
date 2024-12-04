import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const userModel = model('User', userSchema);
