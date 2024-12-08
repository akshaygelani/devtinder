import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      minLength: 1,
      maxLength: 50,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (email) => {
          const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return regex.test(email);
        },
        message: (props) => `${props.value} email is not valid!`,
      },
    },
    password: {
      type: String,
      trim: true,
      minLength: 8,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model('User', userSchema);
