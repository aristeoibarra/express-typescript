import { Router } from "express";
import { TaskController } from "../../controllers";

const TaskRouter = Router();

TaskRouter.get("/", TaskController.index);
TaskRouter.post("/", TaskController.store);
TaskRouter.get("/:id", TaskController.show);
TaskRouter.put("/:id", TaskController.update);
TaskRouter.delete("/:id", TaskController.destroy);

export default TaskRouter;
