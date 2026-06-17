import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authrouter.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const database = db();
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/", authRouter);
// app.get("/login", (req, res) => {
//   res.send("Welcome To login");
// });

app.listen(process.env.PORT, () => {
  console.log("App Is Running", process.env.PORT);
});
