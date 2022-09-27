import { Router } from "express";

const WebRouter = Router();

WebRouter.get("/", (_req, res) => res.send("<h1>Hello World</h1>"));

export default WebRouter;
