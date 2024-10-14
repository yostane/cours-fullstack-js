/**
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function exo1(numbers) {
  return numbers.map((n) => (n % 2 === 0 ? n * 3 : n * 2));
}

console.log(exo1([1, 2, 3, 4, 5]));
console.log(exo1([11, -2, 76, 91, 5]));

/**
 *
 * @param {string[]} texts
 * @returns {number[]}
 */
function exo2(texts) {}
