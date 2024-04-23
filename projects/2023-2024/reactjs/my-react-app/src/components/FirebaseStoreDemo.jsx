import { useState } from "react";
import { auth, db } from "../firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

export default function FirebaseStoreDemo() {
  const fightersCollection = collection(db, "fighters");
  // useState permet de générer un état
  const [fightersList, setFightersList] = useState([]);

  let favoriteFighterDoc = undefined;

  async function filter() {
    const q = query(fightersCollection, where("hp", ">", 50));
    const fightersSnapshot = await getDocs(q);
    const list = fightersSnapshot.docs.map((fighter) => (
      <li key={fighter.id}>Hp: {fighter.data().hp}</li>
    ));
    setFightersList(list);
  }

  async function fetchFavorites() {
    if (!auth.currentUser) {
      console.error("No user loggedIn");
      return;
    }
    const docRef = doc(db, "favorites", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.log("No favorites");
      return;
    }
    console.log("favorites doc snapshot", docSnap);
    console.log("favorites data", docSnap.data());
    favoriteFighterDoc = docSnap.data();
  }

  function isFavorite(fighterId) {
    const result =
      favoriteFighterDoc &&
      Object.prototype.hasOwnProperty.call(favoriteFighterDoc, fighterId);
    console.log("is favorite", fighterId, result);
    return result;
  }

  async function toggleFavorite(fighterId) {
    console.log("setting as favorite", fighterId);
    if (!auth.currentUser) {
      console.error("No user loggedIn");
      return;
    }
    const docRef = doc(db, "favorites", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.log("new favorite doc");
      await setDoc(docRef, {
        [fighterId]: true,
      });
      return;
    }
    const favoriteDoc = docSnap.data();
    if (await isFavorite(fighterId)) {
      favoriteDoc[fighterId] = true;
    } else {
      delete favoriteDoc[fighterId];
    }
    await setDoc(docRef, favoriteDoc);
    await fetchFavorites();
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
    await fetchFighters();
  }

  async function deleteFighter(fighter) {
    await deleteDoc(fighter);
    await fetchFighters();
  }

  async function fetchFighters() {
    const fightersSnapshot = await getDocs(fightersCollection);
    await fetchFavorites();
    const list = fightersSnapshot.docs.map((fighter) => (
      <li key={fighter.id}>
        Name: {fighter.data().name}. Hp: {fighter.data().hp}
        <button onClick={async () => await deleteFighter(fighter.ref)}>
          Delete
        </button>
        <button onClick={async () => await toggleFavorite(fighter.ref)}>
          {isFavorite(fighter.id) ? "💖" : "💛"}
        </button>
      </li>
    ));
    setFightersList(list);
  }

  return (
    <>
      <ul>{fightersList}</ul>
      <button onClick={addFighter}>Add Fighter</button>
      <button onClick={fetchFighters}>Fetch Fighters</button>
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
