import request from "supertest";
import { app, server } from "../src/main";
import { sequelize } from "../src/services/database";
import { Folder, IFolder, IFolderRequest } from "../src/model/Folder";
import { IAuthRequestBody, IUser, User } from "../src/model/User";
import "jest-extended";

describe("Test main.ts", () => {
  const user: IUser = {
    email: "test@test.com",
    id: 0,
  };

  const testUser: IAuthRequestBody = {
    email: "test@test.com",
    password: "test",
  };

  let token = "";

  beforeEach(async () => {
    await sequelize.sync({ force: true });
    const res = await request(app).post("/api/users/register").send(testUser);
    token = res.body.token;
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

  const rootFolders = [
    {
      path: "/documents",
    },
    {
      path: "/photos",
    },
  ];
  const photoFolders = [
    {
      path: "/photos/2023",
    },
    {
      path: "/photos/2024",
    },
  ];
  it.each([...rootFolders, ...photoFolders])(
    "Adding one folder",
    async (folder) => {
      const res = await request(app)
        .post(`/api/folders`)
        .set("Authorization", `Bearer ${token}`)
        .send(folder);
      expect(res.status).toEqual(200);
    }
  );

  test("list subfolders", async () => {
    const promises = [...rootFolders, ...photoFolders].map((item) =>
      request(app)
        .post("/api/folders")
        .set("Authorization", `Bearer ${token}`)
        .send(item)
    );

    await Promise.all(promises);

    const res = await request(app)
      .get("/api/folders?path=/")
      .set("Authorization", `Bearer ${token}`)
      .send();
    expect(res.body).toIncludeAllPartialMembers(rootFolders);

    const res2 = await request(app)
      .get("/api/folders?path=/photos")
      .set("Authorization", `Bearer ${token}`)
      .send();
    expect(res2.body).toIncludeAllPartialMembers(photoFolders);

    const res3 = await request(app)
      .get("/api/folders?path=/documents")
      .set("Authorization", `Bearer ${token}`)
      .send();
    expect(res3.body).toBeEmpty();
  });

  afterAll(() => {
    server.close();
  });
});
