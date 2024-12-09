import mongoose from 'mongoose';
import validator from 'validator';
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
      max: 100,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxLength: 50,
      validate: {
        validator: (email) => validator.isEmail(email),
        message: (props) => `${props.value} email is not valid!`,
      },
    },
    password: {
      type: String,
      trim: true,
      minLength: 8,
      maxLength: 50,
      validate: {
        validator: (password) => validator.isStrongPassword(password),
      },
    },
    about: {
      type: String,
      maxLength: 300,
      default: '',
      trim: true,
    },
    photoUrl: {
      type: String,
      maxLength: 500,
      trim: true,
      default: 'https://akshaygelani.me/assets/images/profile.webp',
      validate: {
        validator: (url) => validator.isURL(url),
      },
    },
    skills: {
      type: [
        {
          type: String,
          trim: true,
          maxLength: 10,
        },
      ],
      trim: true,
      default: ['Javascript', 'Coding', 'Problem Solving'],
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model('User', userSchema);
