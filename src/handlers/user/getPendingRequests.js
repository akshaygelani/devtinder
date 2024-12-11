import { requestModel } from '../../models/request.js';
import { success } from '../../utils/responses.js';

const USER_SAFE_DATA = ['firstName', 'lastName', 'age', 'gender', 'about', 'skills', 'photoUrl'];

export const getPendingRequestsHandler = async (req, res) => {
  let loggedInUser = req.loggedInUser;
  let requests = await requestModel
    .find({
      toUserId: loggedInUser.id,
      status: 'interested',
    })
    .populate('fromUserId', USER_SAFE_DATA);

  return success(res, 'Records fetch successfully', requests);
};
