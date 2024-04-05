import request from "supertest";
import { app } from "../src/app";
import { expect, jest, test, describe } from "@jest/globals";
import { planets } from "../src/constants";

describe("Test planets", () => {
  test("It should GET some planets", async () => {
    const response = await request(app).get("/planets");
    expect(response.statusCode).toBe(200);
    expect(response.body).toIncludeAllMembers(planets);
  });

  test("It should POST a planet", async () => {
    const planetToAdd = { id: 3, name: "Venus", speed: 300 };
    const postResponse = await request(app).post("/planets").send(planetToAdd);
    expect(postResponse.statusCode).toBe(200);

    const newPlanets = [...planets, planetToAdd];
    const response = await request(app).get("/planets");
    expect(response.statusCode).toBe(200);
    expect(response.body).toIncludeAllMembers(newPlanets);
  });
});
