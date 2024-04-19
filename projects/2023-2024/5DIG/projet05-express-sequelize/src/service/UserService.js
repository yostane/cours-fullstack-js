import { Animal } from "../model/Animal.js";
import { User } from "../model/User.js";

export class UserService {
  constructor() {}

  async add(user) {
    await User.create(user);
  }

  async find(email, password) {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });
    return user;
  }

  async findById(id) {
    return await User.findOne({
      where: { id },
      include: Animal,
    });
  }
}
