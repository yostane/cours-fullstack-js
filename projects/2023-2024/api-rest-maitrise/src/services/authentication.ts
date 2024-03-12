import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import { User } from "../model/User";

export const COMPLEX_STRING = "secret";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: COMPLEX_STRING,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await User.findOne({
        where: {
          id: payload.id,
        },
      });
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);
