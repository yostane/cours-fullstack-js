import { ExtractJwt, Strategy } from "passport-jwt";
import { JWT_SECRET } from "../constants.js";
import passport from "passport";
import { UserService } from "./UserService.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    const userService = new UserService();
    const user = userService.findById(payload.id);
    if (!user) {
      done("User not found");
      return;
    }
    done(null, user);
  })
);
