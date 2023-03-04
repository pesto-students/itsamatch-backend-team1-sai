import { Router } from 'express';

import { getMatches } from '../controllers'


const matchesRoutes = Router();

matchesRoutes.route('/').get(getMatches)

export default matchesRoutes
