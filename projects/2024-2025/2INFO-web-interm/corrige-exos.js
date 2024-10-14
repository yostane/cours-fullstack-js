/**
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function exo1(numbers) {
  return numbers.map((n) => (n % 2 === 0 ? n * 3 : n * 2));
}

console.log("Exo 1");
console.log(exo1([1, 2, 3, 4, 5]));
console.log(exo1([11, -2, 76, 91, 5]));

/**
 *
 * @param {string[]} texts
 * @returns {number[]}
 */
function exo2(texts) {
  return texts.map((t) => t.length);
}

console.log("Exo 2");
console.log(exo2(["I ❤️", "JavaScript"]));

/**
 *
 * @param {string[]} texts
 * @returns {{text: string, length: number}}
 */
function exo3(texts) {
  // faut mettre l'objet entre () dans le return d'une fonction
  return texts.map((t) => ({
    text: t,
    length: t.length,
  }));
}

function exo3bis(texts) {
  return texts.map((t) => {
    const o = { text: t, length: t.length };
    return o;
  });
}

console.log("Exo 3");
console.log(exo3(["I ❤️", "JavaScript"]));

/**
 *
 * @param {{text: string, length:number}[]} items
 */
function exo4(items) {
  console.log(
    items.map((i) => i.text),
    items.map((i) => i.length)
  );
}

console.log("Exo 4");
console.log(
  exo4([
    { text: "I ❤️", length: 4 },
    { text: "JavaScript", length: 10 },
  ])
);
