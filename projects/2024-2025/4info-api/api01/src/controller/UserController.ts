import { UserDto } from "../model/User";
import { createUserInDatabase } from "../service/DatabaseHelper";
import fs from "fs/promises";
import { DriveController } from "./DriveController";

export class UserController {
  constructor() {}

  async register(user: UserDto) {
    await createUserInDatabase(user.login, user.password);
    const driveController = new DriveController();
    const drivePath = driveController.getDrivePath(user.login, "");
    await fs.mkdir(drivePath);
    console.log("Created new user", user.login, "with drive path", drivePath);
  }
}
