import { Router } from 'express';

import {
  createUser,
  deleteUser,
  getUserPreference,
  getUser,
  getUserById,
  getSuggestedUserProfiles,
  getLoginCallBack,
  oktaSignUp,
  postLoginCallBack,
  updateUser,
  updateUserPreference,
} from '../controllers';

const userRoutes = Router();

userRoutes.route('/okta-sign-up').post(oktaSignUp);
userRoutes.route('/callback').get(getLoginCallBack).post(postLoginCallBack);
userRoutes.route('/').get(getUser).post(createUser);
userRoutes.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
userRoutes.route('/:userId/preference').get(getUserPreference).put(updateUserPreference);
userRoutes.route('/:userId/profiles').get(getSuggestedUserProfiles)

export default userRoutes;
