import TaskRouter from "./TaskRoutes";
import UserRouter from "./UserRoutes";
import { Router } from "express";

const ApiRouter = Router();

ApiRouter.use("/tasks", TaskRouter);
ApiRouter.use("/users", UserRouter);

export default ApiRouter;
