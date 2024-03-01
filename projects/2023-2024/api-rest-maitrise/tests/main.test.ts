import request from "supertest";

import { app } from "../src/main";

describe("Test main.ts", () => {
  test("get message", async () => {
    const res = await request(app).get("/api/");
    expect(res.body).toEqual({ message: "Express + TypeScript Server" });
  });

  // other tests
});
