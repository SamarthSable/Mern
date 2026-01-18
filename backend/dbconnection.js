// const mongoose = require("mongoose");

// const dbUrl =
//   "mongodb+srv://samarthsable02_db_user:Samarth@2002@cluster0.0yup8rk.mongodb.net/?appName=Cluster0";

// const connectdb = async () => {
//   try {
//     mongoose.connect(dbUrl);
//     console.log("Succes");
//   } catch (error) {
//     console.log(error);
//   }
// };

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// app.use(express.json());

// const dbUrl =
//   "mongodb+srv://samarthsable02_db_user:Samarth%402002@cluster0.0yup8rk.mongodb.net/mydb?retryWrites=true&w=majority";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(dbUrl);
//     console.log("MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// // MongoDB URL
// const dbUrl =
//   "mongodb+srv://samarthsable02_db_user:XnlQOXdYiNrJUF8Z@cluster0.0yup8rk.mongodb.net/mydb?retryWrites=true&w=majority";

// // Connect MongoDB
// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("MongoDB Connected Successfully"))
//   .catch((err) => {
//     console.error("MongoDB connection failed:", err.message);
//     process.exit(1);
//   });

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend running and MongoDB connected");
// });

// // Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const dburl =
  "mongodb+srv://samarthsable02_db_user:XnlQOXdYiNrJUF8Z@cluster0.0yup8rk.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(dburl).then(() => {
  console.log("Connected Succesfully");
});

// test server

app.get("/", (req, res) => {
  res.send("App running success");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
