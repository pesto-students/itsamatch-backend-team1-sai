import { Router } from 'express';

import {
  createPayment,
} from '../controllers';

const stripeRoutes = Router();

stripeRoutes.route('/create_payment').post(createPayment);

export default stripeRoutes;
