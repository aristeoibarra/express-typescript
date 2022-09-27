import UserModel, { User } from "../models/UserModel";
import { Request, Response } from "express";

const UserController = {
  async index(_req: Request, res: Response) {
    const users = await UserModel.find();
    return res.json(users);
  },

  async show(req: Request, res: Response) {
    const user = await UserModel.findById(req.params.id);
    return res.json(user);
  },

  async store(req: Request, res: Response) {
    const user = await UserModel.create({
      ...req.body,
      password: await new User().encryptPassword(req.body.password),
    });
    user.password = undefined;
    return res.json(user);
  },

  async update(req: Request, res: Response) {
    if (req.body.password) {
      req.body.password = await new User().encryptPassword(req.body.password);
    }
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(user);
  },

  async destroy(req: Request, res: Response) {
    await UserModel.findByIdAndDelete(req.params.id);
    return res.send({ message: "User deleted" });
  },
};

export default UserController;
