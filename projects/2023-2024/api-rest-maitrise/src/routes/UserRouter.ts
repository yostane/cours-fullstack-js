import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const userController = new UserController();
  try {
    const content = await userController.login(req.body);
    res.json(content);
  } catch (e) {
    res.sendStatus(401);
  }
});

userRouter.post("/register", async (req, res) => {
  const userController = new UserController();
  try {
    const content = await userController.register(req.body);
    res.json(content);
  } catch (e) {
    res.sendStatus(401);
  }
});
