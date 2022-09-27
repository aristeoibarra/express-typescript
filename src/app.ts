import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(cors());

dotenv.config();

export default app;
