import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.get("/drive-simu", (req, res) => {
  res.json([
    { name: "anime.txt", isFile: true },
    { name: "courses.txt", isFile: true },
    { name: "souvenirs", isFile: false },
  ]);
});

app.get("/drive", async (req, res) => {
  const dir = await fs.opendir("./drive");
  for await (const file of dir) {
    console.log(file.name, file.isDirectory());
  }
});

app.listen(3000, () => {
  console.log("Serveur démarré");
});
