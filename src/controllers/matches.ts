
import { matchesService } from '../services';

const getMatches = async (req, res) => {
  
  const userMatches = await matchesService.getUserMatches();

  res.status(200).json({
    body: userMatches,
  });
};

export {
    getMatches,
};
