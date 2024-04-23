import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { streetFighters } from "../constants";

// treshold -> seuil en anglais
function StreetFigherList({ treshold }) {
  const streetFighterItems = streetFighters.map((streetFighter) => (
    <li key={streetFighter.name}>
      <Link to={"/fighters/" + streetFighter.name}>
        Name: {streetFighter.name}
      </Link>
      <ol>
        <li>Power: {streetFighter.specialAttack}</li>
        <li
          style={{
            color: streetFighter.hp < treshold ? "red" : "green",
          }}
        >
          HP: {streetFighter.hp}
        </li>
      </ol>
    </li>
  ));

  return <ul>{streetFighterItems}</ul>;
}

StreetFigherList.propTypes = {
  treshold: PropTypes.number.isRequired,
};

export default StreetFigherList;
