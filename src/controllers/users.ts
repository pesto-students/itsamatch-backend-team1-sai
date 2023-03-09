import okta, { User as OktaUser } from '@okta/okta-sdk-nodejs';

import { IUser } from '../models/user';
import { userService, userPreferenceService } from '../services';

const oktaUrl = process.env.OKTA_URL || 'https://dev-53982526.okta.com/oauth2/default';
const oktaToken = process.env.OKTA_TOKEN || '00CqKjagqlXc6H3KIGOe6ezzWr1mQPRfwtVEybmbcK';

const createUser = (req, res) => {
  console.log('create user controller');

  res.send('create user controller is called');
};

const deleteUser = (req, res) => {};

const getUser = (req, res) => {
  console.log('getUser controller');
  res.json('get user controller is called');
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  // fetch user by id
  const userDetails = await userService.getById(userId);

  res.status(200).json({
    body: userDetails,
  });
  // return userDetails;
};

const getUserPreference = async (req, res) => {
  const { userId } = req.params;

  const userPreferencesDetails = await userService.getUserPreference(userId);
  return userPreferencesDetails;
};

const oktaSignUp = async (req, res) => {
  try {
    const client: okta.Client = new okta.Client({
      orgUrl: 'http://localhost:9000/users',
      token: oktaToken,
    });
    const body = req.body;

    console.log('creating okta user');
    const response: OktaUser = await client.createUser({ profile: body });
    const { profile, id } = response;
    console.log(profile);

    const createUserPayload: IUser = {
      oktaUserId: id,
      phone: profile.primaryPhone,
      name: `${profile.firstName} ${profile.lastName}`,
      gender: `${profile?.gender}`,
      email: profile.email,
      isActive: true,
      isPremium: false,
      // age: `${profile?.age}`,
      // @ts-ignore
      dob: `${profile?.dob}`,
      // TODO need to check it
      // preference: profile.preferences as any,
    };
    const userDetails = await userService.createUser(createUserPayload);
    res.status(201).json({
      data: userDetails,
    });
  } catch (error) {
    console.error('error signup to okta', error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, payload } = req.body;

    const userDetails = await userService.updateById(id, payload);

    res.status(200).json({
      data: userDetails,
    });
  } catch (error) {
    console.error(`Error updating user details`, error);
  }
};

const updateUserPreference = async (req, res) => {
  const { userId } = req.params;
  const { userPreferences } = req.body;

  // const  preference  = await userService.updateUserPreference(userId, userPreferences);
  // return preference;
};

const getSuggestedUserProfiles = async (req, res) => {
  const { userId } = req.params;
  const { page, size } = req.query;

  const userPreference = await userPreferenceService.getUserPreference(userId);

  const profiles = await getSuggestedProfilesBasedOnPreference(userId, userPreference, page, size);
  res.status(200).json({
    data: profiles,
  });
};

const getSuggestedProfilesBasedOnPreference = async (userId, userPreference, page, size) => {
  // TODO:- Update the alogrithm
  return await userService.getUser(page, size);
};

export {
  createUser,
  deleteUser,
  getUser,
  getUserPreference,
  getSuggestedUserProfiles,
  getUserById,
  oktaSignUp,
  updateUser,
  updateUserPreference,
};
