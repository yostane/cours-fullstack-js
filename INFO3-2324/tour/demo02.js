const a = true;
const b = false;
const d = new Date();
console.log(d, d.getFullYear());
// tableau
const items = [10, -10, "hello", true];
console.log(items, items[1]);

for (const item of items) {
  console.log("current item", item);
}

let x = undefined;
x = null;

let y;
console.log(x, y);

function multiply(a, b) {
  console.log(a, b);
  return a + b;
}

console.log(multiply());
console.log(multiply(10));
