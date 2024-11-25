import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
  // Sans composition
  const itemsElementNoComposition = items.map((item) => (
    <article key={item.id}>
      ({item.id}) Title: {item.label}, Done: {item.done ? "Done" : "Not done"}
    </article>
  ));
  // Avec de la composition de composants
  const itemsElement = items.map((item) => (
    <div key={item.id}>
      <TodoItem id={item.id} label={item.label} done={item.done} />
    </div>
  ));

  return (
    <>
      <div>{itemsElement}</div>
      Sans composition
      <div>{itemsElementNoComposition}</div>
    </>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};
