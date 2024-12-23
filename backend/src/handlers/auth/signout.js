import { success } from '../../utils/responses.js';
import { FRONTEND_BASE_URL } from '../../utils/constants.js';
const url = new URL(FRONTEND_BASE_URL);
const cookieDomain = url.hostname;

export const signOutHandler = (req, res) => {
  res.cookie('access_token', null, {
    domain: cookieDomain,
    sameSite: 'none',
    secure: true,
    expires: new Date(Date.now()),
  });
  return success(res, 'Logged out!!');
};
