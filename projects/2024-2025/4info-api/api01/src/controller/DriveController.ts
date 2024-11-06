import fs from "fs/promises";
import { Item } from "../model/Item";
import { ItemInfo } from "../model/ItemInfo";

export class DriveController {
  getDrivePath(login: string, path: string): string {
    return `./drive/${login}${path.length > 1 ? "/" + path : ""}`;
  }

  async setTextFileContent(
    login: string,
    filePath: string,
    content: string
  ): Promise<void> {
    const path = this.getDrivePath(login, filePath);
    await fs.writeFile(path, content);
  }

  async listItemsByPath(login: string, path: string): Promise<Item[]> {
    const drivePath = this.getDrivePath(login, path);
    const dir = await fs.opendir(drivePath);
    const items: Item[] = [];
    for await (const file of dir) {
      items.push({ name: file.name, isFile: file.isFile() });
    }
    return items;
  }

  async getTextFileContent(login: string, filePath: string): Promise<string> {
    const drivePath = this.getDrivePath(login, filePath);
    return await fs.readFile(drivePath, {
      encoding: "utf8",
    });
  }

  async getItemInfo(login: string, path: string): Promise<ItemInfo> {
    const drivePath = this.getDrivePath(login, path);
    if (login === "hit") {
      throw new Error("Personnage banni");
    }
    const file = await fs.stat(drivePath);
    return new ItemInfo(path.split("/").pop() ?? "", path, file.size);
  }

  generateSimulatedData() {
    return [
      { name: "anime.txt", isFile: true },
      { name: "courses.txt", isFile: true },
      { name: "souvenirs", isFile: false },
    ];
  }

  async listRootItems(login: string): Promise<Item[]> {
    const dir = await fs.opendir(`./drive/${login}`);
    // :Item[] -> tableau d'items.  = [] on initialise avec un tableau vide
    const items: Item[] = [];
    for await (const file of dir) {
      items.push({ name: file.name, isFile: file.isFile() });
    }
    return items;
  }
}
