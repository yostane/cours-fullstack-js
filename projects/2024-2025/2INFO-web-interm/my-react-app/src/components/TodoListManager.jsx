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
    //[...items, newItem] nouveau tableau qui reprend les élémetns du premier et ajoute un nouvel élément
    // ...items => item1, items2, item3, ...
    setItems([...items, newItem]);
  }

  function updateLabel(label, item) {
    // Mise à jour du label en passant par une fonction
    item.label = label;
    setItems([...items]);
  }

  const editableItems = items.map((item) => (
    <article key={item.id}>
      <b>({item.id})</b>
      <div>
        <label htmlFor="label">Label</label>
        <input
          type="text"
          name="label"
          value={item.label}
          onChange={(event) => updateLabel(event.target.value, item)}
        />
      </div>
      <div>
        <label htmlFor="done">Done</label>
        <input
          type="checkbox"
          name="done"
          checked={item.done}
          onChange={(event) => {
            // Update label sans fonction (directement dans le onchange)
            item.done = event.target.checked;
            setItems([...items]);
          }}
        />
      </div>
    </article>
  ));

  return (
    <>
      Add Item:
      <input
        type="text"
        value={label}
        onChange={(event) => setLabel(event.target.value)}
        minLength={1}
      />
      <button onClick={() => addItem()}>Add Item</button>
      <TodoList items={items} />
      <div>Editable {editableItems}</div>
    </>
  );
}
