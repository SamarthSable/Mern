import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.mjs";

export async function hashPass(pass) {
  const hashedPass = await bcrypt.hash(pass, 10);
  console.log(hashedPass);
  return hashedPass;
}

export async function comparePass(pass, hashPass) {
  const decode = await bcrypt.compare(pass, hashPass);
  return decode;
}

export function generateToken(data) {
  const token = jwt.sign(data, process.env.JWT_KEY);
  return token;
}

export function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.send("NO token");
  }
  const decodes = jwt.verify(token, process.env.JWT_KEY);
  req.user = decodes;
  console.log(decodes);

  next();
  return decodes;
}

export async function crateUser(data) {
  const newUser = await User.create({
    name: data.name,
    email: data.email,
    pass: data.hashedPass,
  });

  return newUser;
}
