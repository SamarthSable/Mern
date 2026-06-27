// import express from "express";
// const app = express();
// const PORT = 5000;

// // Routes
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Learning Express");
// });

// app.post("/login", (req, res) => {
//   const { name, email, password } = req.body;
//   const { age, city } = req.query;
//   //   const id = req.params;
//   res.send({ name, email, password, age, city });
// });
// app.listen(PORT, () => {
//   console.log("App is running");
// });
import express from "express";
const app = "express"();
const PORT = 5000;

app.use(express.json);
app.get("/", (req, res) => {
    res.send("learn")
    
});
app.post("login", (req, res) => {
    const { name, id, email, password } = req.body;
    const(age,city)
});