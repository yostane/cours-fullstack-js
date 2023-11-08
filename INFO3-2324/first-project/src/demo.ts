import * as os from "os";
console.log("Hello");

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 33));
console.log(os.platform());
