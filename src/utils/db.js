import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_SECRET);
  } catch {
    throw new Error("Unable to establish connection");
  }
};
