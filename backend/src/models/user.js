import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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
        },
      ],
      trim: true,
      default: ['Javascript', 'Coding', 'Problem Solving'],
      validate: {
        validator: (arr) => {
          return arr.length < 11;
        },
        message: (props) => `Maximum 10 Skills are allowed [${props.value}]`,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Below are two ways to add schema methods
userSchema.method('getJWT', function () {
  // generate JWT Token
  const access_token = jwt.sign({ id: this.id }, 'asb@344', {
    expiresIn: '1d',
  });
  return access_token;
});

userSchema.methods.comparePassword = async function (passwordInputByUser) {
  // compare user provided password and password hash
  let isPasswordCorrect = await bcrypt.compare(passwordInputByUser, this.password);
  return isPasswordCorrect;
};

export const userModel = model('User', userSchema);
