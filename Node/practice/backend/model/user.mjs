import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  pass: String,
});

const User = mongoose.model("User", userSchema);

export default User;
