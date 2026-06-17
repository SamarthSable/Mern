import mongoose from "mongoose";

function db() {
  const database = mongoose
    .connect(process.env.DB_URL)
    .then(console.log("connected"));
  return database;
}

export default db;
