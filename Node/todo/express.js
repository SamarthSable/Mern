import express from "express";
import { todo } from "./db.mjs";
import router from "./todo.routes.mjs";
const app = express();
const port = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Server Running");
  res.send("Running");
});

app.use("/todos", router);
app.listen(port, () => {
  console.log(`App Running on Port ${port}`);
});
