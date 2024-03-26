import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// treshold -> seuil en anglais
function StreetFigherList({ treshold }) {
  const streetFighters = [
    {
      name: "ryu",
      specialArrack: "Hadoken",
      hp: 30,
    },
    {
      name: "Sagat",
      specialArrack: "Tiger Uppercut",
      hp: 110,
    },
    {
      name: "Akuma",
      specialArrack: "GoHadoken",
      hp: 80,
    },
  ];

  const streetFighterItems = streetFighters.map((streetFighter) => (
    <li key={streetFighter.name}>
      <Link to={"/fighters/" + streetFighter.name}>
        Name: {streetFighter.name}
      </Link>
      <ol>
        <li>Power: {streetFighter.specialArrack}</li>
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
