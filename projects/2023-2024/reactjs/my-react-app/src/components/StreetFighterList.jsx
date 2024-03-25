import PropTypes from "prop-types";

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
  ];

  const streetFighterItems = streetFighters.map((streetFighter) => (
    <li key={streetFighter.name}>
      Name: {streetFighter.name}.
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
