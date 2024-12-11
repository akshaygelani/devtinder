import mongoose from 'mongoose';
import { requestModel } from '../../models/request.js';
import { userModel } from '../../models/user.js';
import { success, badRequest } from '../../utils/responses.js';

export const sendRequestHandler = async (req, res) => {
  let { action } = req.body;
  let allowedAction = ['ignored', 'interested'];
  if (!allowedAction.includes(action)) {
    return badRequest(res, 'Invalid Action', [
      {
        field: 'action',
        message: "Supported actions are 'ignored' and 'interested'",
      },
    ]);
  }

  let loggedInUser = req.loggedInUser;

  let fromUserId = loggedInUser.id;
  let toUserId = req.params.toUserId;

  if (!mongoose.isValidObjectId(toUserId)) {
    return badRequest(res, 'Invalid toUserId');
  }

  if (fromUserId === toUserId) {
    return badRequest(res, 'Cannot send connection request to self');
  }

  let toUser = await userModel.findById(toUserId);
  if (!toUser) {
    return badRequest(res, 'Incorrect toUserId');
  }

  let connectionRequests = await requestModel.findOne({
    $or: [
      {
        fromUserId,
        toUserId,
      },
      {
        fromUserId: toUserId,
        toUserId: fromUserId,
      },
    ],
  });

  if (connectionRequests) {
    return badRequest(res, 'Connection request already exists!');
  }

  let request = new requestModel({
    fromUserId,
    toUserId,
    status: action,
  });

  await request.save();

  return success(res);
};
