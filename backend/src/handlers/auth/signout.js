import { success } from '../../utils/responses.js';

export const signOutHandler = (req, res) => {
  res.cookie('access_token', null, {
    expires: new Date(Date.now()),
  });
  return success(res, 'Logged out!!');
};
