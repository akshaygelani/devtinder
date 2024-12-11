import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const connectionRequestSchema = new Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: ['ignored', 'interested', 'accepted', 'rejected'],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const requestModel = model('Request', connectionRequestSchema);
