import express from "express";

const app = express();
app.set("views", "./src/views");
app.set("view engine", "pug");

app.get("/hello", (req, res) =>
  res.render("hello.pug", { title: "Hey", message: "Hello there!" })
);

const items = ["Hello", "pug"];

app.get("/data.html", (req, res) => res.render("list.pug", { items: items }));

app.listen(3000, () => console.log("Serveur démarré"));
