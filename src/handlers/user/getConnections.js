import { requestModel } from '../../models/request.js';
import { success } from '../../utils/responses.js';

const USER_SAFE_DATA = ['firstName', 'lastName', 'age', 'gender', 'about', 'skills', 'photoUrl'];

export const getConnectionsHandler = async (req, res) => {
  let loggedInUser = req.loggedInUser;

  let connections = await requestModel
    .find({
      $or: [
        {
          fromUserId: loggedInUser.id,
          status: 'accepted',
        },
        {
          toUserId: loggedInUser.id,
          status: 'accepted',
        },
      ],
    })
    .populate('fromUserId', USER_SAFE_DATA)
    .populate('toUserId', USER_SAFE_DATA);

  connections = connections.map((row) => {
    if (row.fromUserId.id === loggedInUser.id) {
      return row.toUserId;
    }
    return row.fromUserId;
  });
  return success(res, 'Records fetch successfully', connections);
};
