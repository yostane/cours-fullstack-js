import { useParams } from "react-router-dom";
import { streetFighters } from "../constants";

export default function FighterDetailPage() {
  const params = useParams();
  const fighter = streetFighters.find((f) => f.name === params.name);
  console.log(fighter);
  return (
    <>
      <h1>Fighter Details {params.name}</h1>
      {fighter ? (
        <>
          <p>{fighter.name}</p>
          <p>{fighter.hp}</p>
          <p>{fighter.specialAttack}</p>
        </>
      ) : (
        <p style={{ color: "red" }}>No fighter found</p>
      )}
    </>
  );
}
