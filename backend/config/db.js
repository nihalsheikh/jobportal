import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  await mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB CONNECTION SUCCESSFULL");
  });
};
