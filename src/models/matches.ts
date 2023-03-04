import { Schema, model } from 'mongoose';


export interface IMatches {
  name?: string;
  dob?: Date;
  location?: string;
  img_url?: string;
}

const matchesSchema = new Schema<IMatches>({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  location: { type: String, required: true },
  img_url: { type: String, required: true },
});

export const Matches = model<IMatches>('Matches', matchesSchema);
