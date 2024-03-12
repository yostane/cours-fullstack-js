import { sequelize } from "../src/services/database";
import { Card } from "../src/model/Card";

describe("Testing the database", () => {
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
    expect(cards[0]).toMatchObject(cardToAdd);
  });
});
