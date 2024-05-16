import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/json", (req, res) => {
  res.json([
    {
      name: "js",
      typing: "dynamic",
    },
    {
      name: "ts",
      typing: "static",
    },
  ]);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
