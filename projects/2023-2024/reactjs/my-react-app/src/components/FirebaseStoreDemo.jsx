import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export default function FirebaseStoreDemo() {
  const fightersCollection = collection(db, "fighters");
  // useState permet de générer un état
  const [fightersList, setFightersList] = useState([]);

  async function fetchFighters() {
    const fightersSnapshot = await getDocs(fightersCollection);
    const list = fightersSnapshot.docs.map((fighter) => (
      <li key={fighter.id}>
        Name: {fighter.data().name}. Hp: {fighter.data().hp}
      </li>
    ));
    setFightersList(list);
  }

  // useEffect permet de générer un changement d'état
  useEffect(() => {
    fetchFighters();
  });

  return <ul>{fightersList}</ul>;
}

/*
  première syntaxe pour manipuler les promesses (avant l'implémentation du await)
  getDocs(fightersCollection).then(fightersSnapshot => {
    const list = fightersSnapshot.docs.map((fighter) => (
      <li key={fighter.id}>
        Name: {fighter.data().name}. Hp: {fighter.data().hp}
      </li>
    ));
    setFightersList(list);
  })*/
