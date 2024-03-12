import request from "supertest";

import { app, server } from "../src/main";
import { sequelize } from "../src/database";
import { Folder, IFolder } from "../src/model/Folder";
import { IUser, User } from "../src/model/User";

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

  const user: IUser = {
    email: "test@test.com",
    id: 0,
  };

  const rootFolders: IFolder[] = [
    {
      path: "/documents",
      owner: user,
    },
    {
      path: "/photos",
      owner: user,
    },
  ];
  const photoFolders: IFolder[] = [
    {
      path: "/photos/2023",
      owner: user,
    },
    {
      path: "/photos/2024",
      owner: user,
    },
  ];
  it.each([...rootFolders, ...photoFolders])(
    "Adding one folder",
    async (folder) => {
      const res = await request(app).post(`/api/folders`).send(folder);
      expect(res.status).toEqual(200);
    }
  );

  test("list subfolders", async () => {
    const u = await User.create({ email: user.email });
    user.id = u.id;
    for (const folder of [...rootFolders, ...photoFolders]) {
      const f = await Folder.create({ path: folder.path });
      f.$set("owner", u);
    }
    const res = await request(app).get("/api/folders").send({ path: "/" });
    expect(res.body).toMatchObject(rootFolders);

    const res2 = await request(app)
      .get("/api/folders")
      .send({ path: "/photos" });
    expect(res.body).toMatchObject(photoFolders);

    const res3 = await request(app)
      .get("/api/folders")
      .send({ path: "/documents" });
    expect(res.body).toBe([]);
  });

  afterAll(() => {
    server.close();
  });
});
