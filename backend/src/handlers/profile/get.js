import { success } from '../../utils/responses.js';

export const getProfileHandler = (req, res) => {
  let loggedInUser = req.loggedInUser;
  return success(res, null, loggedInUser);
};
