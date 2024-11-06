import { UserDto } from "../model/User";
import {
  createUserInDatabase,
  isUserInDatabase,
} from "../service/DatabaseHelper";
import fs from "fs/promises";
import { DriveController } from "./DriveController";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";

export class UserController {
  constructor() {}

  async register(user: UserDto) {
    await createUserInDatabase(user.login, user.password);
    const driveController = new DriveController();
    const drivePath = driveController.getDrivePath(user.login, "");
    await fs.mkdir(drivePath);
    console.log("Created new user", user.login, "with drive path", drivePath);
  }

  getJwt(login: string, password: string): string {
    if (!isUserInDatabase(login, password)) {
      throw new Error("User not found");
    }
    return jwt.sign({ name: login }, JWT_SECRET);
  }
}
