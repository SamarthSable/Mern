import mongoose from "mongoose";

export function connectDb() {
  const db = mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected"));
}
