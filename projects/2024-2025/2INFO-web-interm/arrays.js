const numbers = [1, 2, -30, 26, 91];

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

for (const number of numbers) {
  console.log(number);
}

// multiplier les éléments pairs par deux
const result = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    result.push(number * 2);
  }
}
console.log(result);
