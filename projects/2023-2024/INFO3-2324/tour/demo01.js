console.log("hello");

let x = 10; // ne pas utiliser var
x = "Hello";
console.log("La valeur de x est", x);

// Pourquoi ne pas utiliser var -> car ce code contre-intuitif est correct en JS
function sayHello() {
  x = 10;
  console.log("hello", x);
  var x;
}

sayHello();

// variables non réassignable (on dit constante par abus de langage)
const message = "Hello";
// assignation ou affectation -> message = "Hello"
// message = "dfsdf";

// Object litéral
const streetFighterCharacter = {
  name: "ryu",
  hp: 100,
  attack: function () {
    console.log("hadouuuken");
  },
};

console.log(streetFighterCharacter, streetFighterCharacter.name);
streetFighterCharacter.attack();
// pas d'erreur car const n'empeche la modification de l'objet assigné
streetFighterCharacter.name = "Ken";

// streetFighterCharacter = {} // erreur

// Les fonctions sont des éléments de première classe (on peut la manipuler avec des variables)
const add = function (x, y) {
  return x + y;
};

console.log(add(10, 20), add, add(4, 5));

// Une fonction peut être un argument d'une autre fonction
function runArgument(f) {
  console.log("before");
  f();
  console.log("after");
  f();
}

runArgument(function () {
  console.log("Hello");
});

// Fonction flèche
runArgument(() => {
  console.log("hello");
});

const g = () => {
  console.log("arrow function");
};

runArgument(g);
runArgument(sayHello);
