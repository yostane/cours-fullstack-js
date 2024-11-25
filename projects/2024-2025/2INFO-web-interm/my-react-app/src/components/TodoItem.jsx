import PropTypes from "prop-types";

export default function TodoItem({ id, label, done }) {
  const doneElement = done ? <b>Done</b> : <i>Not done yet</i>;
  return (
    <>
      ({id}) Title: {label}, {doneElement}
    </>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};
