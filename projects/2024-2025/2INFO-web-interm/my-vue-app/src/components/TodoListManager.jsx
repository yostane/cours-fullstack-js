import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoListManager() {
  const [label, setLabel] = useState("");
  const [items, setItems] = useState([
    { id: 1, label: "Faire le routage", done: false },
    { id: 2, label: "Faire des exos sur les listes", done: false },
    { id: 3, label: "Faire des exos de base", done: true },
  ]);

  function addItem() {
    const newItem = {
      id: items.length + 1,
      label: label,
      done: false,
    };
    setItems([...items, newItem]);
  }

  return (
    <>
      Add Item:{" "}
      <input
        type="text"
        value={label}
        onChange={(event) => setLabel(event.target.value)}
        minLength={1}
      />
      <button onClick={addItem}>Add Item</button>
      <TodoList items={items} />
    </>
  );
}
