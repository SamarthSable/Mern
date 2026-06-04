import express from "express";
const app = express();
app.use(express.json());
const Port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome TO learn");
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(id);
});

app.get("/user", (req, res) => {
  const { pages, limit } = req.query;
  console.log(pages, limit);
  res.send({ pages, limit });
});

app.listen(Port, () => {
  console.log("App is running on port " + Port);
});
