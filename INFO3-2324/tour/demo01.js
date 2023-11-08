console.log("hello");

let x = 10; // ne pas utiliser var
x = "Hello";
console.log("La valeur de x est", x);

// Pourquoi ne pas utiliser var
function sayHello() {
  x = 10;
  console.log("hello", x);
  var x;
}

sayHello();
