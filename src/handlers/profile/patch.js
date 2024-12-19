import { success, badRequest } from '../../utils/responses';

export const patchProfileHandler = async (req, res) => {
  let allowedUpdates = ['firstName', 'lastName', 'age', 'gender', 'photoUrl', 'about', 'skills'];

  let isUpdateAllowed = Object.keys(req.body).every((field) => allowedUpdates.includes(field));

  if (!isUpdateAllowed) {
    return badRequest(res, 'Invalid Body!');
  }
  let loggedInUser = req.loggedInUser;

  Object.keys(req.body).forEach((key) => {
    loggedInUser[key] = req.body[key];
  });

  await loggedInUser.save();
  return success(res, 'Record Updated!', loggedInUser);
};
