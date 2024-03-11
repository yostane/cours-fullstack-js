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

@Route("/folders")
export class FolderController extends Controller {
  @Get("/{path}")
  public async getContent(path: string): Promise<IItem[]> {
    const folders = (await Folder.findAll()).filter((folder) =>
      folder.path.startsWith(path)
    );

    const files = await File.findAll({
      where: {
        path: path,
      },
    });

    return [...folders, ...files];
  }

  @Post("/{path}")
  public async createFolder(path: string): Promise<void> {
    await Folder.create({ path: path });
  }
}
