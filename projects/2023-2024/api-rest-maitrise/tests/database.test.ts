import { sequelize } from "../src/database";
import { Card } from "../src/model/Card";

describe("Test main.ts", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });
  test("Can conncet to database", async () => {
    await sequelize.authenticate();
  });

  test("can add a card", async () => {
    const cardToAdd = {
      name: "Magicien sombre",
      attack: 2500,
      type: "attack",
    };
    await Card.create(cardToAdd);

    const cards = await Card.findAll();
    expect(cards).toMatchObject([cardToAdd]);
  });
});
