const numbers = [1, 3, 4, 5, -2];

const doubles = numbers.map((item) => item * 2);
const sumOfDoubles = doubles.reduce((acc, cur) => acc + cur);
console.log(doubles, sumOfDoubles);

const messages = ["un", "deux", "trois"];
const counts = messages.map((item) => item.length);
console.log(counts);

const bigMessage = messages.reduce((acc, cur) => acc + cur, "");
console.log(bigMessage);

// Prédicat: fonction qui retourne un booléen. Par ex: (item) => item >= 0
const positives = numbers.filter((item) => item >= 0);
console.log(positives);

const dishes = [
  { name: "kebab", price: 6.5 },
  { name: "plateau sushi", price: 15 },
];
const html = dishes
  .map(
    (dish) => `<li>
    Name: ${dish.name} - price: ${dish.price}
    <button onclick="deleteDish('${dish.name}')">Supprimer</button>
  </li>`
  )
  .reduce((acc, cur) => acc + cur, "");
console.log(html);
