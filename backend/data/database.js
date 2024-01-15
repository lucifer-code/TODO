import mongoose from "mongoose";
const DB_URL = process.env.MONGO_URI || 'mongodb+srv://VishalAdmin:Vishal99_mon@cluster0.1og6vmz.mongodb.net/';
export const connectDB = () => {
  mongoose
    // .connect("mongodb://localhost:27017", {
    .connect("mongodb+srv://VishalAdmin:Vishal99_mon@cluster0.1og6vmz.mongodb.net/", {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
