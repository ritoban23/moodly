import mongoose, { Schema, model } from 'mongoose';

export interface IMoodEntry {
  userId: mongoose.Types.ObjectId;
  mood: number;
  note?: string;
  date: Date;
}

const MoodEntrySchema = new Schema<IMoodEntry>({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true },//using ref is how MongoDB/Mongoose implements relationships/foreign keys
    mood: { type: Number, required: true, min: 1, max: 5 },
    note: { type: String },
    date: { type: Date, required: true }
});

export const MoodEntry = model<IMoodEntry>('MoodEntry', MoodEntrySchema);