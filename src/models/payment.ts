import { Schema, model } from 'mongoose';

export interface IPayment {
    userId: string;  // TODO:- Schema.Types.ObjectId
    created: Date;
    client_ip: string; 
    email: string;
    type: string;
    card: Object;
    tokenId: string;
}

const paymentSchema = new Schema<IPayment>({
  userId: { type: String },
  tokenId: { type: String },
  created: { type: Date },
  client_ip: { type: String },
  email: { type: String },
  type: { type: String },
  card: {type: Object}
});

export const Payment = model<IPayment>('Payment', paymentSchema);
