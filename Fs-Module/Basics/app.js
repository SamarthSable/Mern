// import fs, { appendFile } from "fs";
// const file = fs.readFile("./node.txt", "Utf8", (err, data) => {
//   console.log(data);
// });

// fs.writeFileSync("test.txt", "Hello I am Learning file system");
// fs.appendFile("./test.txt", "NO need to append", (err) => {});

import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  // const stream = fs.createReadStream("./node.txt", "utf-8");
  // stream.on("data", (chunk) => {
  //   res.write(chunk);
  // });

  // stream.on("end", () => res.end());

  const stream2 = fs.createWriteStream("./new.txt");
  stream2.write("I am writing this stream ");
  stream2.end();
  stream2.on("finish", () => {
    console.log("All data has been safely written to the file.");
  });
});
app.listen(5000, () => {
  console.log("App running on port 5000");
});
