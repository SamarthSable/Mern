import mongoose from "mongoose";

const dataBase = async () => {
  await mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected");
  });
};

export default dataBase;
