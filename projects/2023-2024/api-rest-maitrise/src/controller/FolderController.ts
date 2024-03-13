// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Route,
  Inject,
  Security,
} from "tsoa";
import { Folder, IFolderRequest } from "../model/Folder";
import { File } from "../model/File";
import { IItem } from "../model/Item";
import { IUser, User } from "../model/User";
import { Op } from "sequelize";

function countSlashes(input: string): number {
  const slashCount = input.match(/\//g)?.length ?? 0;
  const extraSlashes = input.endsWith("/") ? 1 : 0;
  return slashCount - extraSlashes;
}

function filterChilren<T extends IItem>(items: T[], path: string): T[] {
  return items.filter(
    (item) =>
      item.path.startsWith(path) &&
      path !== item.path &&
      countSlashes(path) === countSlashes(item.path) - 1
  );
}

@Route("/api/folders")
@Security("jwt")
export class FolderController extends Controller {
  @Get("/")
  public async getChildren(
    @Query() path: string,
    @Inject() currentUser: IUser
  ): Promise<IItem[]> {
    const findOptions = {
      include: [
        {
          model: User,
          attributes: ["email", "id"], // https://stackoverflow.com/a/38247617
        },
      ],
      attributes: ["path"],
      where: {
        "$owner.email$": currentUser.email,
        path: {
          [Op.startsWith]: path, // Tous les chemins qui commencent par path
        },
      },
    };
    // TODO: optimiser le filtrage côté BDD (actuellement on récupère tout le contenu du user puis on filtre dans le code)
    const folders = await Folder.findAll(findOptions);
    const files = await File.findAll(findOptions);
    const allContent = [...folders, ...files];
    return filterChilren(allContent, path);
  }

  @Post("/")
  public async createFolder(
    @Body() request: IFolderRequest,
    @Inject() user: IUser
  ): Promise<void> {
    const currentUser = user as User;
    const path = request.path;
    if (!path.startsWith("/") || path.length < 2 || path.endsWith("/")) {
      throw new Error("Incorrect path");
    }
    // TODO: check with current user also
    const count = await Folder.count({
      where: {
        path: path,
        ownerId: currentUser.id,
      },
    });
    if (count > 0) {
      throw new Error("Folder already exists");
    }
    const folder = await Folder.create({ path: path, owner: currentUser });
    folder.$set("owner", currentUser);
  }
}
