console.log("hello");

let x = 10;
// Chaine de caractères litérale (literal string)
x = "hello";

console.log("la valeur de x est", x);

function showMessage() {
  let message = "Hello";
  console.log(message);
}

showMessage();

// Variable non réassignable (constante)
const messages = ["Hello", 2024];
// message =
messages.push("Mars");
console.log(messages);

// Objet litéral
const planete1 = {
  nom: "soleil",
  vitesseRotation: 200_000,
};

console.log(planete1);

const planete2 = {
  nom: "soleil",
  vitesseRotation: 200_000,
};

console.log(planete2, planete2.nom);

console.log("parcour des éléments d'un tableau");
for (const message of messages) {
  console.log(message);
}

console.log("parcour des propriétés de la planete");
for (const key in planete1) {
  if (Object.hasOwnProperty.call(planete1, key)) {
    const value = planete1[key];
    console.log(key, "=>", value);
  } else {
    console.log("not OwnProperty", key, "=>", value);
  }
}
