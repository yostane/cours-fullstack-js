// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import {
  IAuthRequestBody,
  IAuthResponseBody,
  IUser,
  User,
} from "../model/User";
import { compare, compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { COMPLEX_STRING } from "../services/authentication";
import "@dotenvx/dotenvx";

// generate access token. Remplacer secret par une chaine aléatoire
function getToken(id: number): string {
  return jwt.sign({ id: id }, COMPLEX_STRING, {
    expiresIn: process.env.TOKEN_DURATION ?? "1d",
  });
}

@Route("/api/users")
export class UserController extends Controller {
  @Post("/login")
  public async login(
    @Body() userRequest: IAuthRequestBody
  ): Promise<IAuthResponseBody> {
    const user = await User.findOne({
      where: {
        email: userRequest.email,
      },
    });
    if (user && compareSync(userRequest.password, user.password)) {
      return {
        token: getToken(user.id),
      };
    }
    throw new Error("User not found");
  }

  @Post("/register")
  public async register(
    @Body() userRequest: IAuthRequestBody
  ): Promise<IAuthResponseBody> {
    const user = await User.create({
      email: userRequest.email,
      password: hashSync(userRequest.password, 8),
    });
    return {
      token: getToken(user.id),
    };
  }
}
