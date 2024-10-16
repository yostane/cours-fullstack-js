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
exo4([
  { text: "I ❤️", length: 4 },
  { text: "JavaScript", length: 10 },
]);

/**
 * Un nombre premier doit accepter exactement deux diviseurs (1 n'est donc pas premier)
 * @param {{text: string, length:number}} item
 * @returns {number}
 */
function isNotPrime(item) {
  const n = item.length;
  if (n === 1) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param {{text: string, length:number}[]} items
 */
function exo5(items) {
  const filteredItems = items.filter(isNotPrime);
  console.log(
    filteredItems.map((i) => i.text),
    filteredItems.map((i) => i.length)
  );
}

console.log("Exo 5");
exo5([
  { text: "I love!", length: 7 },
  { text: "JavaScript", length: 10 },
]);

/**
 *
 * @param {{id: number, title: string, completed: boolean}[]} todos
 * @param {number} id
 * @returns {{id: number, title: string, completed: boolean}[]}
 */
function exo6(todos, id) {
  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));
}

console.log("Exo 6");
const todos = [
  { id: 2, title: "Allumer le PC", completed: false },
  { id: 1, title: "Faire les exos de JS", completed: true },
];
const updatedTodos = exo6(todos, 2);
console.log(updatedTodos);

/**
 *
 * @param {{id: number, title: string, completed: boolean}[]} todos
 * @returns {string[]}
 */
function exo7(todos) {
  return todos
    .filter((todo) => todo.completed === true)
    .map((todo) => todo.title);
}

console.log("Exo 7");
console.log(exo7(todos));
console.log(exo7(updatedTodos));
