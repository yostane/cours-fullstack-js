import express from "express";
import { UserController } from "../controller/UserController";
import { UserDto } from "../model/User";

export const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const user = req.body as UserDto;
    const userController = new UserController();
    await userController.register(user);
    res.end();
  } catch (e) {
    console.error(e.message);
    res.status(400).end();
  }
});

userRouter.post("/login", (req, res) => {
  const user = req.body as UserDto;
  const userController = new UserController();
  const jwt = userController.getJwt(user.login, user.password);
  res.json({
    token: jwt,
  });
});
