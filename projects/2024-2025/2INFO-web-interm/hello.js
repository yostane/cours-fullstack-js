console.log("Hello");
let x = 10;
console.log("x", x);
x = "Hello";
console.log("x", x);
// consntante, variable non réassignable
const y = 20;

function add(x = "Hello", y = 0) {
  return x + y;
}

console.log(add(30, 44));
console.log(add("Hello", -2));
console.log(add());
console.log(add(10));

function printMessage(message) {
  console.log(message);
}

printMessage("Hello");
printMessage();

console.log(5 / 0);
console.log(5 + undefined);
console.log('+"123" + 6 ->', +"123" + 6);
console.log('+"a" ->', +"a");
console.log("B" + "a" + +"a" + "a");

const f = add;
console.log(f(3, 5));

function printCalculation(f) {
  const result = f(4, 5);
  console.log(result);
}

printCalculation(add);
printCalculation(function (x, y) {
  return x - y;
});
printCalculation((x, y) => x - y);

setTimeout(() => {
  console.log("Hello après un un certain temps");
}, 1000);

function doSomething() {
  console.log("I'm doing something");
}

setTimeout(doSomething, 500);

console.log(1 == 1, 1 === 1);
console.log(1 == "1", 1 === "1");
console.log(1 != "1", 1 !== "1");
