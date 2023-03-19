import { IPayment, Payment } from '../models';

const createPayment = async (paymentPayload: IPayment): Promise<IPayment> => {
  return await Payment.create(paymentPayload);
    //   TODO:- Update user ispremium field
};

export { createPayment };

