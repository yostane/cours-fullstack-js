import PropTypes from "prop-types";

/**
 * To instanciate <ShowAlternating items={["un", "deux", "trois"]} />
 * @param {{texts: string[]}}
 * @returns
 */
export default function ShowAlternating({ texts }) {
  const textsElements = texts.map((text, index) => (
    <li
      key={index}
      style={{ backgroundColor: index % 2 === 0 ? "grey" : "blue" }}
    >
      text ({text.length})
    </li>
  ));
  return <ul>{textsElements}</ul>;
}

ShowAlternating.propTypes = {
  texts: PropTypes.string.isRequired,
};
