import TaskModel from "../models/TaskModel";
import { Request, Response } from "express";

const TaskController = {
  async index(_req: Request, res: Response) {
    const users = await TaskModel.find();
    return res.json(users);
  },

  async show(req: Request, res: Response) {
    const user = await TaskModel.findById(req.params.id);
    return res.json(user);
  },

  async store(req: Request, res: Response) {
    const user = await TaskModel.create(req.body);
    return res.json(user);
  },

  async update(req: Request, res: Response) {
    const user = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(user);
  },

  async destroy(req: Request, res: Response) {
    await TaskModel.findByIdAndDelete(req.params.id);
    return res.send({ message: "Task deleted" });
  },
};

export default TaskController;
