import { UserDto } from "../model/User";
import { createUserInDatabase } from "../service/DatabaseHelper";

export class UserController {
  constructor() {}

  register(user: UserDto) {
    createUserInDatabase(user.login, user.password);
  }
}
