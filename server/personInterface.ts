import mongoose from "mongoose";

export interface Person {
  _id: mongoose.Types.ObjectId;
  name: string;
  armyId: string;
  unit: string;
  location: string;
}
