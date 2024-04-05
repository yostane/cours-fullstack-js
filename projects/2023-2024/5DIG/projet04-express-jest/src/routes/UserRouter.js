import express from "express";
import { UserService } from "../service/UserService.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants.js";

export const userRouter = express.Router();

userRouter.post("/login", (req, res) => {
  res.end();
});

userRouter.post("/register", (req, res) => {
  const userService = new UserService();
  userService.add(req.body);
  res.json({
    toekn: jwt.sign(
      { id: req.body.id, email: req.email, year: 2024 },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    ),
  });
});
