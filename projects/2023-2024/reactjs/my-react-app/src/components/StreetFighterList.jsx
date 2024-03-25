function StreetFigherList() {
  const streetFighters = [{
      name: "ryu",
      specialArrack: "Hadoken",
      hp: 100
    },{
      "name": "Sagat",
      "specialArrack": "Tiger Uppercut",
      hp: 110
    }
  ];

  const streetFighterItems = streetFighters.map(streetFighter => 
    <li key={streetFighter.name}>
      Name: {streetFighter.name}. 
      <ol>
        <li>Power: {streetFighter.specialArrack}</li>
        <li>HP: {streetFighter.hp}</li>
      </ol>
    </li>
    )

  return (
    <ul>{streetFighterItems}</ul>
  )
}

export default StreetFigherList
