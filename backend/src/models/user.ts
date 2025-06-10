import mongoose, { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

export const User = model<IUser>('User', UserSchema);