import mongoose from 'mongoose';
import { requestModel } from '../../models/request.js';
import { noContent, badRequest } from '../../utils/responses.js';

export const reviewRequestHandler = async (req, res) => {
  let { action } = req.body;
  let allowedAction = ['accepted', 'rejected'];
  if (!allowedAction.includes(action)) {
    return badRequest(res, 'Invalid Action', [
      {
        field: 'action',
        message: "Supported actions are 'accepted' and 'rejected'",
      },
    ]);
  }

  let requestId = req.params.requestId;

  if (!mongoose.isValidObjectId(requestId)) {
    return badRequest(res, 'Invalid requestId');
  }
  let loggedInUser = req.loggedInUser;

  let request = await requestModel.findOne({
    _id: requestId,
    toUserId: loggedInUser.id,
    status: 'interested',
  });

  if (!request) {
    return badRequest(res, 'requestId not found');
  }

  request.status = action;
  await request.save();
  return noContent(res);
};
