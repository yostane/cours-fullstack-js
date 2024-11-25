import PropTypes from "prop-types";

export default function MessageShow({ message }) {
  return (
    <>
      <p>
        The message is: {message}. Its length is: {message.length}
      </p>
    </>
  );
}

MessageShow.propTypes = {
  message: PropTypes.string.isRequired,
};
