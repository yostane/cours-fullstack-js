import PropTypes from "prop-types";

export default function ShowMax({ a, b }) {
  const max = a >= b ? a : b;
  let maxIf = a;
  if (a > b) {
    maxIf = a;
  } else {
    maxIf = b;
  }
  return (
    <>
      Max of {a} and {b} is {max}, {a >= b ? a : b} , {maxIf}
    </>
  );
}

ShowMax.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
