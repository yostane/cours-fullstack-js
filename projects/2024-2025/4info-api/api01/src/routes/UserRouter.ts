import express from "express";
import { UserController } from "../controller/UserController";
import { UserDto } from "../model/User";

export const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  const user = req.body as UserDto;
  const userController = new UserController();
  userController.register(user);
  res.end();
});
