import express from "express";
import bcrypt from "bcrypt";
const app = express();
const port = 3000;
const users = [];
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Node js");
});

app.post("/user/login", async (req, res) => {
  const { Email, Password } = req.body;
  let user = users.find((u) => u.email === Email);
  if (!user) {
    res.send("Invalid Credentials");
  } else {
    let autanticate = await bcrypt.compare(Password, user.password);
    if (autanticate) {
      res.send("logged succes");
    } else {
      res.send("Invalid credentials");
    }
  }
});
app.post("/user", async (req, res) => {
  const { Password } = req.body;
  let hashedPass = await bcrypt.hash(Password, 10);
  let user = {
    name: req.body.Name,
    email: req.body.Email,
    password: hashedPass,
  };
  console.log(hashedPass);
  users.push(user);
  console.log(users);
  res.json(user);
});

app.listen(port, () => {
  console.log("App is Running on Port :" + port);
});
