import { Schema, model } from 'mongoose';
import { IUserPreference } from './userPreference';

export interface ISwipe {
  userA: Schema.Types.ObjectId | IUserPreference;
  userB: Schema.Types.ObjectId | IUserPreference;
  swipeState: string;
  isMatch: boolean;
}

const swipeSchema = new Schema<ISwipe>({
  userA: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  userB: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  swipeState: { type: String, required: true, enum: ['left', 'right'] },
  isMatch: {type: Boolean, default: false}
});

export const Swipe = model<ISwipe>('Swipe', swipeSchema);


