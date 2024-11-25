import { useParams } from "react-router-dom";
import { getTodo } from "../services/TodoService";

export function Todo() {
  // Les hooks commencent par use
  const params = useParams();
  // en JS +"2" devient le nombre 2
  const todo = getTodo(+params.id);
  return (
    <>
      <dt>Title:</dt>
      <dd>{todo.title}</dd>
      <dt>Completed ?</dt>
      <dd>{todo.completed ? "True" : "False"}</dd>
    </>
  );
}
