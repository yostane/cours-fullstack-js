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
  Hidden,
  Inject,
  Security,
} from "tsoa";
import { Folder, IFolderRequest } from "../model/Folder";
import { File } from "../model/File";
import { IItem } from "../model/Item";
import { IUser, User } from "../model/User";

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
      include: [User],
      where: {
        "$owner.email$": currentUser.email,
      },
    };
    // TODO: optimiser le filtrage côté BDD (actuellement on récupère tout le contenu du user puis on filtre dans le code)
    const folders = await Folder.findAll(findOptions);
    const files = await File.findAll(findOptions);
    const allContent = [...folders, ...files];
    return filterChilren(allContent, path);
  }

  @Post("/create")
  public async createFolder(
    @Body() request: IFolderRequest,
    @Inject() user: IUser
  ): Promise<void> {
    const currentUser = user as User;
    const path = request.path;
    const folder = await Folder.create({ path: path, owner: currentUser });
    folder.$set("owner", currentUser);
  }
}
