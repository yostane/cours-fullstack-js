import request from "supertest";

import { app, server } from "../src/main";
import { sequelize } from "../src/database";
import { IFolder } from "../src/model/Folder";

describe("Test main.ts", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  test("get message", async () => {
    const res = await request(app).get("/api/");
    expect(res.body).toEqual({ message: "Express + TypeScript Server" });
  });

  const testCards = [
    {
      name: "Magicien sombre",
      attack: 2500,
      type: "attack",
    },
    {
      name: "Monster rebord",
      attack: 0,
      type: "magick",
    },
  ];
  it.each(testCards)("post card", async (card) => {
    const res = await request(app).post("/api/cards").send(card);
    expect(res.status).toEqual(200);
  });

  const testFolders: IFolder[] = [
    {
      path: "/documents",
    },
    {
      path: "/photos",
    },
  ];
  it.each(testFolders)("Adding one folder", async (folder) => {
    const res = await request(app).post(`/api/folders`).send(folder);
    expect(res.status).toEqual(200);
  });

  test("adding multiple folders", async () => {
    for (const folder of testFolders) {
      await request(app).post(`/api/folders`).send(folder);
    }
    const res = await request(app).get("/api/folders").send();
    expect(res.body).toMatchObject(testFolders);
  });

  afterAll(() => {
    server.close();
  });
});
