import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db.js";
import { router } from "./routes/loginRoutes.js";
import cookies from "cookie-parser";
const app = express();
dotenv.config();
app.use(express.json());
connectDb();
app.use(cookies());
app.get("/", (req, res) => {
  res.send("Welcome to Mock");
});
app.use("/", router);
app.listen(5000, () => {
  console.log("App is running on 5000");
});
