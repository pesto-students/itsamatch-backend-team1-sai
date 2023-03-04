import { Schema, model } from 'mongoose';
import { IUser } from './user';


export interface ILocation {
  latitude?: string;
  longitude?: string;
}

export interface IUserPreference {
  user: Schema.Types.ObjectId | IUser;
  gender?: string;
  age?: number;
  location?: ILocation;
  drinking?: boolean;
  smoking?: boolean;
}

const userPreference = new Schema<IUserPreference>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  gender: { type: String },
  location: {
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
  },
  age: { type: Number },
  drinking: { type: Boolean },
  smoking: { type: Boolean },
});

export const UserPreference = model<IUserPreference>('UserPreference', userPreference);
