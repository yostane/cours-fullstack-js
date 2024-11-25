import { Link } from "react-router-dom";
import { getAllTodos } from "../services/TodoService";

export default function Todos() {
  const todos = getAllTodos().map((todo) => (
    <li key={todo.id}>
      <Link to={"/todo/" + todo.id}>Title: {todo.title}</Link>. Is completed:{" "}
      {todo.completed ? "true" : "false"}
    </li>
  ));
  return (
    <>
      <ul>{todos}</ul>
    </>
  );
}
