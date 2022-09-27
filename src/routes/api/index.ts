import TaskRouter from "./TaskRoutes";
import { Router } from "express";

const ApiRouter = Router();

ApiRouter.use("/tasks", TaskRouter);

export default ApiRouter;
