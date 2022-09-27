import mongoose from "mongoose";
import config from "../utils/config";

export default async function connectToDatabase() {
  await mongoose
    .connect(config.MONGODB_URI)
    .then(() => console.log("Connected to mongodb"))
    .catch((err) => console.log("Error connecting mongodb", err));
}
