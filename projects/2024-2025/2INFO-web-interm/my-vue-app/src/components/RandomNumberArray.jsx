import PropTypes from "prop-types";

/**
 * Composant qui Affiche un nombre (count) entiers aléatoires
 */
export default function RandomNumberArray({ count }) {
  const items = new Array(count);
  // tableau aléatoire
  for (let index = 0; index < items.length; index++) {
    items[index] = Math.floor(Math.random() * 10);
  }

  const html = <p>Hello</p>;

  const itemsElements = items.map((item, index) => (
    <li key={index}>Elément Courant {item}</li>
  ));

  return (
    <>
      {html}
      {items}
      <ul>{itemsElements}</ul>
    </>
  );
}

RandomNumberArray.propTypes = {
  count: PropTypes.number.isRequired,
};
