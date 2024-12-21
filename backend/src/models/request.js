import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const connectionRequestSchema = new Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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

// compound index
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 }, { unique: true });

// Added for learning,- optional. we have already handled this in handler
connectionRequestSchema.pre('save', function (next) {
  if (this.fromUserId.equals(this.toUserId)) {
    const error = new Error(
      'Error from schema validation pre hook - Cannot send connection request to self'
    );
    return next(error);
  }
  next();
});

export const requestModel = model('Request', connectionRequestSchema);
