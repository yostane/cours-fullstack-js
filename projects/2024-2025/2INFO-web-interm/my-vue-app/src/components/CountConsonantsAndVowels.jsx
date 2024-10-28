import PropTypes from "prop-types";

export default function CountConsonantsAndVowels({ word }) {
  // word.match(/[aeiuyo]/gi)? : renvoie un tableau qui peut être null et ? renvoie null au lieu de crasher
  // ?? 0 Si le résultat est null, on renvoie 0
  const vowelCount = word.match(/[aeiuyo]/gi)?.length ?? 0;
  return (
    <>
      Vowels of {word}: {vowelCount}. Consonants: {word.length - vowelCount}
    </>
  );
}

CountConsonantsAndVowels.propTypes = {
  word: PropTypes.string.isRequired,
};
