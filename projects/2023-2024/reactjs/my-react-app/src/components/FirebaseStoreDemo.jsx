import { useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export default function FirebaseStoreDemo() {
  const fightersCollection = collection(db, "fighters");
  const [fightersList, setFightersList] = useState([]);

  // TODO: à corriger le use state
  useState(async () => {
    const fightersDocs = await getDocs(fightersCollection);
    const list = fightersDocs.docs.map((fighter) => (
      <li key={fighter.id}>{fighter.data().name}</li>
    ));
    setFightersList(list);
  });

  return <ul>{fightersList}</ul>;
}
