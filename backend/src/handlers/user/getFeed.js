import { userModel } from '../../models/user.js';
import { requestModel } from '../../models/request.js';
import { success } from '../../utils/responses.js';

const USER_SAFE_DATA = ['firstName', 'lastName', 'age', 'gender', 'about', 'skills', 'photoUrl'];

export const getUserFeedHandler = async (req, res) => {
  let loggedInUser = req.loggedInUser;
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(50, parseInt(req.query.limit) || 10);
  const skip = (page - 1) * limit;

  let userIdsToBeHidden = new Set(); // contains userIds, which needs to be hidden in user feed.
  // find all connections requests which are sent by me or received to me
  let requests = await requestModel.find({
    $or: [{ fromUserId: loggedInUser.id }, { toUserId: loggedInUser.id }],
  });
  requests.forEach((request) => {
    userIdsToBeHidden.add(request.fromUserId);
    userIdsToBeHidden.add(request.toUserId);
  });

  let users = await userModel
    .find({
      $and: [{ _id: { $nin: Array.from(userIdsToBeHidden) } }, { _id: { $ne: loggedInUser.id } }],
    })
    .select(USER_SAFE_DATA)
    .skip(skip)
    .limit(limit);

  return success(res, 'Records fetch successfully', users, { limit, page });
};
