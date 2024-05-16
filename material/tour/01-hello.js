const x = 10;
console.log("hello", x);

let y = 20;
console.log(y, "type de y:", typeof y);
y = "hello";
console.log(y, "type de y:", typeof y);

function printTypeOf(x) {
  console.log(x, "type de x:", typeof x);
}

printTypeOf(20.5);
printTypeOf(new Date("2005-02-15"));
printTypeOf(true);
printTypeOf(["Hello", "JS"]);
// objet litéral
printTypeOf({
  language: "JS",
  year: 2024
});
// JSON: JavaScript Object Notation
printTypeOf({
  "language": "JS",
  "year": 2024
});

function varDemo() {
  x = 10
  console.log(x);
  var x;
  // let x;
}

varDemo();

let z;
console.log(z);
z = null;
console.log(z);
printTypeOf();