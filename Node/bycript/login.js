import express from "express";
import bcrypt from "bcrypt";

const app = express();
const port = 5000;
app.use(express.json());
let users = [];
let notes = [];
let currentUser = null;
app.post("/register", async (req, res) => {
  const { password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  let user = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  };

  users.push(user);
  res.json({ message: "Succesfully Logged", user });
});
app.post("/login", async (req, res) => {
  let user = users.find((u) => u.email === req.body.email);
  if (!user) {
    return res.send("Invalid Credentials");
  }
  const authanticate = await bcrypt.compare(req.body.password, user.password);
  if (!authanticate) {
    return res.send("Invalid Credentials");
  } else {
    currentUser = user.email;
    res.send("Login Successful");
  }
});
app.post("/logout", (req, res) => {
  if (!currentUser) {
    res.send("No User Logged in");
  } else {
    currentUser = null;
    res.send("Successfully logged out");
  }
});

app.post("/notes", (req, res) => {
  if (!currentUser) {
    return res.send("Only Logged in can add notes");
  }
  const note = {
    userEmail: currentUser,
    title: req.body.title,
    content: req.body.content,
  };

  notes.push(note);

  console.log(notes);
  res.send("Created Note");
});
app.listen(port, () => {
  console.log("App is running on Port:" + port);
});
