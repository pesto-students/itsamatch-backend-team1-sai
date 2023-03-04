import { IMatches, Matches } from '../models';

const getUserMatches = async (): Promise<Array<IMatches>> => {
  return await Matches.find();
};

export { getUserMatches };

