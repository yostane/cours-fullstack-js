import request from "supertest";
import { app } from "../src/app";
import { expect, jest, test } from "@jest/globals";
import { planets } from "../src/constants";

describe("Test planets", () => {
  test("It should GET some planets", async () => {
    const response = await request(app).get("/planets");
    expect(response.statusCode).toBe(200);
    expect(response.body).toIncludeAllMembers(planets);
  });
});
