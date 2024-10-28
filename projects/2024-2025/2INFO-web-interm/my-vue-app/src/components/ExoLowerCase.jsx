import PropTypes from "prop-types";

export default function ExoLowerCase({ text }) {
  const lowerCased = text.toLowerCase();
  return (
    <>
      <ul>
        <li>
          Méthode 1 en calculant dans la partie code du composant: {lowerCased}
        </li>
        <li>Méthode 2 directement dans le html: {text.toLowerCase()}</li>
      </ul>
    </>
  );
}

// la prp text est une chaîne de caractères obligatoire
ExoLowerCase.propTypes = {
  text: PropTypes.string.isRequired,
};
