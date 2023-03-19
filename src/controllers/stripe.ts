
const stripe = require("stripe")('sk_test_fbj4mFHwBpJSFWsBy5di8MAH00XaugQ6kx'); // <-- change the key here
import { IPayment } from '../models/payment';
import { paymentService } from '../services';



const createPayment = async (req, res) => {

  let status, error;
  const { token, amount, userId } = req.body;
  try {
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: 'inr',
    });

    const paymentPayload: IPayment = {
      tokenId: token.id,
      card: token.card,
      client_ip: token.client_ip,
      created: token.created,
      email: token.email,
      type: token.type,
      userId: userId
    }

    await paymentService.createPayment(paymentPayload);
    status = 'success';

  } 
  catch (error) {
    console.log(error);
    status = 'Failure';
  }

  res.json({ error, status });
};

export {
    createPayment
};
