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
import { Card, ICard } from "../model/Card";

@Route("cards")
export class CardController extends Controller {
  @Get("/")
  public async getAll(): Promise<ICard[]> {
    return await Card.findAll();
  }
}
