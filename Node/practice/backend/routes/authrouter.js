import express from "express";
import bcrypt from "bcrypt";
import {
  comparePass,
  crateUser,
  generateToken,
  hashPass,
  verifyToken,
} from "../middelwere/authMid.js";
import User from "../model/user.mjs";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashedPass = await hashPass(pass);
  const newUser = await crateUser({ name, email, hashedPass });
  // const decode = await comparePass(pass, hashedPass);
  res.send(newUser);
});

router.post("/login", async (req, res) => {
  const { name, email, pass } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.send("user Not found");
  }
  let found = await comparePass(pass, user.pass);
  if (!found) {
    return res.send("inValid pass");
  }
  const token = await generateToken({ name });
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 360000,
  });
  res.send("User Logged in");
});

router.get("/profile", verifyToken, (req, res) => {
  res.send("Welcome to profile");
});

router.get("/logout", (req, res) => {
  res.send("Welcome to logout");
});

export default router;
