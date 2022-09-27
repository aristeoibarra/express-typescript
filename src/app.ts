import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { ApiRouter, WebRouter } from "./routes";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(cors());

// API Routes
app.use("/api", ApiRouter);

// Web Routes
app.use("/", WebRouter);

dotenv.config();

export default app;
