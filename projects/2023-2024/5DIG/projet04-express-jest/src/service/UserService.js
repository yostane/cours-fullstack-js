import { User } from "../model/User.js";

const users = [
  new User(3, "drvet@vet.com", "pwd", true),
  new User(5, "client@vet.com", "pwd", false),
];

export class UserService {
  constructor() {}

  add(user) {
    users.push(
      new User(user.id, user.email, user.password, user.isVet ?? false)
    );
  }

  find(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  }

  findById(id) {
    return users.find((user) => user.id === id);
  }
}
