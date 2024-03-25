function StreetFigherList() {
  const streetFighters = [{
      name: "ryu",
      specialArrack: "Hadoken"
    },{
      "name": "Sagat",
      "specialArrack": "Tiger Uppercut"
    }
  ];

  const streetFighterItems = streetFighters.map(streetFighter => 
    <li key={streetFighter.name}>
      Name: {streetFighter.name}. Power: {streetFighter.specialArrack}
    </li>
    )

  return (
    <ul>{streetFighterItems}</ul>
  )
}

export default StreetFigherList
