import { server } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
