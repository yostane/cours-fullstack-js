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

import { hashSync } from "bcrypt-ts";

@Route("/api/users")
export class UserController extends Controller {
  @Get("/login")
  public async login(
    @Body() userRequest: IAuthRequestBody
  ): Promise<IAuthResponseBody> {
    const user = await User.findOne({
      where: {
        email: userRequest.email,
        password: hashSync(userRequest.password),
      },
    });
    if (user) {
      return {
        token: "",
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
      password: hashSync(userRequest.password),
    });
    return {
      token: "",
    };
  }
}
