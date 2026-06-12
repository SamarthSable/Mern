import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dataBase from "./db.js";
dotenv.config();
const port = 5000;
const app = express();
app.use(express.json());
dataBase();
app.get("/", (req, res) => {
  res.send("All settled");
});

app.listen(port, () => {
  console.log("App Is Running on Port", port);
});
