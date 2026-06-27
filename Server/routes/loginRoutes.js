import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const router = express.Router();
import { MyUser } from "../modal/user.mjs";
import { authMiddleware } from "../middelwere/authMiddleware.js";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await MyUser.findOne({ email });
  const name = user.name;

  const token = jwt.sign({ name }, process.env.JWT_KEY);

  const compared = await bcrypt.compare(password, user.password);
  res.cookie("token", token, {
    maxAge: 360000,
  });
  res.send(token);
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await MyUser.create({ name, email, password: hashedPass });
    res.send(user);
  } catch (err) {
    res.status(401).send("Please Fill Details");
  }
});

router.get("/home", authMiddleware, (req, res) => {
  res.send("Home PAge");
});
