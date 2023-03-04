import { IUserPreference, UserPreference } from '../models';

const getUserPreference = async (userId: string ): Promise<IUserPreference> => {
  return await UserPreference.findOne({user: userId});
};

export { getUserPreference };

