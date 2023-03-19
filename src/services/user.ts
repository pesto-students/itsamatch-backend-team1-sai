import { IUser, IUserPreference, User, UserPreference } from '../models';

const getUser = async (page = 1, size = 20) => {
  return await User.find({})
    .skip((page - 1) * size)
    .limit(size);
};

const getById = async (userId: string): Promise<IUser> => {
  return await User.findOne({ oktaId: userId });
};

const createUser = async (user: IUser): Promise<IUser> => {
  try {
    return await User.create(user);
  } catch (error) {
    throw Error('Error creating a user');
  }
};

const getUserPreference = async (userId: string): Promise<IUserPreference> => {
  const userPreference = await UserPreference.findOne({ user: userId });
  return userPreference;
};

const updateById = async (userId: string, userPayload: Partial<IUser>): Promise<IUser> => {
  try {
    const options = { new: true };
    return await User.findOneAndUpdate({ _id: userId }, userPayload, options);
  } catch (error) {
    throw Error('Error creating a user');
  }
};

const updateUserPreference = async (userId: string, userPreference: any): Promise<IUserPreference> => {
  const userPreferenceDetail = await UserPreference.findOneAndUpdate(
    { user: userId },
    { ...userPreference },
    { new: true }
  );

  return userPreferenceDetail;
};

export { createUser, getById, getUser, getUserPreference, updateById, updateUserPreference };
