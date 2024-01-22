import mongoose from "mongoose";
const DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017';
export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {dbName: "backendapi"})
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
