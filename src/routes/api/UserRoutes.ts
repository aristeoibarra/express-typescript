import { Router } from "express";
import { UserController } from "../../controllers";

const UserRouter = Router();

UserRouter.get("/", UserController.index);
UserRouter.post("/", UserController.store);
UserRouter.get("/:id", UserController.show);
UserRouter.put("/:id", UserController.update);
UserRouter.delete("/:id", UserController.destroy);

export default UserRouter;
