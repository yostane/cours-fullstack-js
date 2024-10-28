import PropTypes from "prop-types";

/**
 * To instanciate <StringLengths items={["un", "deux", "trois"]} />
 * @param {{texts: string[]}}
 * @returns
 */
export default function StringLengths({ texts }) {
  const textsElements = texts.map((text, index) => (
    <li key={index}>text ({text.length})</li>
  ));
  return <ul>{textsElements}</ul>;
}

StringLengths.propTypes = {
  texts: PropTypes.string.isRequired,
};
