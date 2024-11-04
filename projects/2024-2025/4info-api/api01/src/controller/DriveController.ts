import fs from "fs/promises";
import { Item } from "../model/Item";

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
}
