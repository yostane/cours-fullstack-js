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
import { Folder } from "../model/Folder";
import { File } from "../model/File";
import { IItem } from "../model/Item";
import { IUser, User } from "../model/User";

function countSlashes(input: string): number {
  return input.match(/\//g)?.length ?? 0 - (input.endsWith("/") ? 1 : 0);
}

function filterChilren<T extends IItem>(
  items: T[],
  path: string,
  currentUser: IUser
): T[] {
  return items.filter(
    (item) =>
      item.path.startsWith(path) &&
      path !== item.path &&
      countSlashes(path) === countSlashes(item.path)
  );
}

@Route("/folders")
export class FolderController extends Controller {
  @Get("/{path}")
  public async getChildren(
    path: string,
    currentUser: IUser = { id: 0, email: "test@test.com" }
  ): Promise<IItem[]> {
    const findOptions = {
      include: [User],
      where: {
        "$owner.email$": currentUser.email,
      },
    };
    const folders = await Folder.findAll(findOptions);
    const files = await File.findAll(findOptions);
    const allContent = [...folders, ...files];
    return filterChilren(allContent, path, currentUser);
  }

  @Post("/{path}")
  public async createFolder(
    path: string,
    currentUser: IUser = { id: 0, email: "test@test.com" }
  ): Promise<void> {
    await Folder.create({ path: path, owner: currentUser });
  }
}
