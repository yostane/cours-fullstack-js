import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import { User } from "../model/User";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
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
