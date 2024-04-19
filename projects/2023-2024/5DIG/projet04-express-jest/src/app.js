import express from "express";
import bodyParser from "body-parser";
import { planetRouter } from "./routes/PlanetRouter.js";
import { userRouter } from "./routes/UserRouter.js";
import passport from "passport";
import "./service/authentication.js";

export const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>Hello express</body>
  </html>
  `);
});

app.use(
  "/planets",
  passport.authenticate("jwt", { session: false }),
  planetRouter
);
app.use("/users", userRouter);
