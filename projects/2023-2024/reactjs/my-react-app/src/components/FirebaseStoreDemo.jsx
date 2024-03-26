import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export default function FirebaseStoreDemo() {
  const fightersCollection = collection(db, "fighters");
  // useState permet de générer un état
  const [fightersList, setFightersList] = useState([]);

  async function filter() {
    const q = query(fightersCollection, where("hp", ">", 50));
    const fightersSnapshot = await getDocs(q);
    const list = fightersSnapshot.docs.map((fighter) => (
      <li key={fighter.id}>Hp: {fighter.data().hp}</li>
    ));
    setFightersList(list);
  }

  async function addFighter() {
    // Doc: permet de créer un document vierge
    const newDoc = doc(fightersCollection);
    // setDoc permet de mettre des données dans le document
    await setDoc(newDoc, {
      name: "Blanka",
      hp: 200,
      specialPower: "Blanka roll",
    });
  }

  async function deleteFighter(fighter) {
    const d = doc(fightersCollection, fighter);
    await deleteDoc(d);
  }

  async function fetchFighters() {
    const fightersSnapshot = await getDocs(fightersCollection);
    const list = fightersSnapshot.docs.map((fighter) => (
      <li key={fighter.id}>
        Name: {fighter.data().name}. Hp: {fighter.data().hp}
        <button onClick={async () => await deleteFighter(fighter)}>
          Delete
        </button>
      </li>
    ));
    setFightersList(list);
  }

  // useEffect permet de générer un changement d'état
  useEffect(() => {
    console.log("calling use effect");
    fetchFighters();
  });

  return (
    <>
      <ul>{fightersList}</ul>
      <button onClick={addFighter}>Add Fighter</button>
    </>
  );
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
