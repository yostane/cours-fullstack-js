import express from "express";
import { UserService } from "../service/UserService.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants.js";

export const userRouter = express.Router();

function generateOkBody(user) {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isVet: user.isVet ?? false,
      year: 2024,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return { token };
}

userRouter.post("/login", (req, res) => {
  const userService = new UserService();
  const user = userService.find(req.body.email, req.body.password);
  if (!user) {
    res.status(401).end();
  } else {
    res.json(generateOkBody());
  }
});

userRouter.post("/register", (req, res) => {
  const userService = new UserService();
  userService.add(req.body);
  res.json(generateOkBody());
});
