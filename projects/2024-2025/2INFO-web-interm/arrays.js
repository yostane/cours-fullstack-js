const numbers = [1, 2, -30, 26, 91];

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

for (const number of numbers) {
  console.log(number);
}

// multiplier les éléments pairs par deux
// style impératif
const result = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    result.push(number * 2);
  }
}
console.log(result);

// style déclaratif
const filteredNumbers = numbers.filter((number) => number % 2 === 0);
const transformedNumbers = filteredNumbers.map((number) => number * 2);
console.log(filteredNumbers, transformedNumbers);
console.log(numbers.filter((n) => n % 2 === 0).map((n) => n * 2));
