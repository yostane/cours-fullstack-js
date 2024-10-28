import PropTypes from "prop-types";

// TODO: à compléter
export default function EditableTodoList({ items }) {
  const editableItems = items.map((item) => (
    <article key={item.id}>
      <b>({item.id})</b>
      <div>
        <label htmlFor="label">Label</label>
        <input
          type="text"
          name="label"
          value={item.label}
          onChange={(event) => (item.label = event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="done">Done</label>
        <input type="checkbox" name="done" value={item.done} />
      </div>
    </article>
  ));

  return <div>{editableItems}</div>;
}

EditableTodoList.propTypes = {
  items: PropTypes.array.isRequired,
};
