import { success } from '../../utils/responses.js';
import { IS_PROD, FRONTEND_HOSTNAME } from '../../utils/constants.js';

export const signOutHandler = (req, res) => {
  res.cookie('access_token', null, {
    domain: FRONTEND_HOSTNAME,
    secure: IS_PROD,
    expires: new Date(Date.now()),
  });
  return success(res, 'Logged out!!');
};
