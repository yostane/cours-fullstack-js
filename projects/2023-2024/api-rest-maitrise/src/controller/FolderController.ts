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
  Request,
  Header,
} from "tsoa";
import { Folder, IFolderRequest } from "../model/Folder";
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
  @Post("/")
  public async getChildren(
    @Request() request: IFolderRequest
  ): Promise<IItem[]> {
    const path = request.path;
    const currentUser = request.user;
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

  @Post("/create")
  public async createFolder(@Request() request: IFolderRequest): Promise<void> {
    const path = request.path;
    const currentUser = request.user;
    const folder = await Folder.create({ path: path, owner: currentUser });
    folder.$set("owner", currentUser);
  }
}
