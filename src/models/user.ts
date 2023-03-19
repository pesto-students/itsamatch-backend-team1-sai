import { Schema, model } from 'mongoose';
import { IUserPreference } from './userPreference';

export interface ILocation {
  latitude?: string;
  longitude?: string;
}

export interface IUserInfo {
  smoking: string;
  drinking: string;
  weight: string;
  height: string;
}

export interface IUser {
  name: string;
  dob?: Date;
  gender?: string;
  phone: string;
  email?: string;
  oktaUserId: string;
  location?: ILocation;
  isActive?: boolean;
  isPremium?: boolean;
  preference?: Schema.Types.ObjectId | IUserPreference;
  description: string;
  info: IUserInfo;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: false },
  location: {
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
  },
  oktaUserId: { type: String, unique: true, required: true },
  isActive: { type: Boolean, required: true, default: true },
  isPremium: { type: Boolean, required: true, default: false },
  preference: { type: Schema.Types.ObjectId, ref: 'UserPreference' },
  description: { type: String, required: true },
  info:{
    smoking: { type: Boolean, required: true, default: false },
    drinking: { type: Boolean, required: true, default: false },
    weight: { type: String, required: true },
    height:{ type: String, required: true},
  }
});

export const User = model<IUser>('User', userSchema);
