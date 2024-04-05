import { User } from "../model/User.js";

export class UserService {
  constructor() {
    this.users = [
      new User(3, "drvet@vet.com", "pwd", true),
      new User(5, "client@vet.com", "pwd", false),
    ];
  }

  add(user) {
    this.users.push(user);
  }

  find(email, password) {
    return this.users.find(
      (user) => user.email === email && user.password === password
    );
  }
}
