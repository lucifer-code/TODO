import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import {config} from "dotenv"



config({
  path: "./data/config.env",
});

connectDB();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    `Server is working on port:${PORT} in ${process.env.FRONTEND_URL} Mode`
  );
});
