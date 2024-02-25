import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// JSON: JavaScript Object Notation
// Sérialisze: tranformer des données en string et vice-versa avec un format précis

const messages = [
  {
    message: "hello",
    year: 2023,
  },
];

app.get("/api/hello", (req, res) => {
  res.json(messages);
});

app.post("/api/hello", (req, res) => {
  const message = req.body;
  messages.push(message);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Clients rest -> curl, postman, Rest client vscode, thunder vscode

// curl -d '{"message":"value1", "year":1999}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/hello
// curl http://localhost:3000/api/hello
