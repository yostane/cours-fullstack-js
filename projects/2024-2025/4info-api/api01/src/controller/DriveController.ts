import fs from "fs/promises";
import { Item } from "../model/Item";
import { ItemInfo } from "../model/ItemInfo";

export class DriveController {
  async listItemsByPath(path: string): Promise<Item[]> {
    const dir = await fs.opendir(`./drive/${path}`);
    const items: Item[] = [];
    for await (const file of dir) {
      items.push({ name: file.name, isFile: file.isFile() });
    }
    return items;
  }

  async getTextFileContent(filePath: string): Promise<string> {
    return await fs.readFile(`./drive/${filePath}`, {
      encoding: "utf8",
    });
  }

  async getItemInfo(path: string): Promise<ItemInfo> {
    const file = await fs.stat(`./drive/${path}`);
    return new ItemInfo(path.split("/").pop() ?? "", path, file.size);
  }

  generateSimulatedData() {
    return [
      { name: "anime.txt", isFile: true },
      { name: "courses.txt", isFile: true },
      { name: "souvenirs", isFile: false },
    ];
  }

  async listRootItems(): Promise<Item[]> {
    const dir = await fs.opendir("./drive");
    // :Item[] -> tableau d'items.  = [] on initialise avec un tableau vide
    const items: Item[] = [];
    for await (const file of dir) {
      items.push({ name: file.name, isFile: file.isFile() });
    }
    return items;
  }
}
