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

console.log(1 == "1", 1 === "1", 1 != "1", 1 !== "1");
console.log(("b" + "a" + +"a" + "a").toLowerCase());

console.log(1 / 0 + 1 / 0, 0 / 0, +"a", +"3676736");

function add(x, y) {
  return x + y;
}

const add2 = function (x, y) {
  return x + y;
};

const add3 = (x, y) => {
  return x + y;
};

const add4 = (x, y) => x + y;

console.log(add(2, 4), add3(3, -199));
console.log(add(2), add3(), add4(12, 33, 343), add("2", 10));
