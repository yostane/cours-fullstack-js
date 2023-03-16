let x = 10;
x = "Hello";
console.log("Hello");

const items = ["I", "love", "JS"];
for (const item of items) {
  console.log(item);
}

if (x === 10) {
  console.log("x est égal à 10");
} else {
  console.log("x est différent de 10");
}

const tournesol = {
  année: 2020,
  couleur: "jaune",
};

for (const key in tournesol) {
  if (Object.hasOwnProperty.call(tournesol, key)) {
    const element = tournesol[key];
    console.log(key, element);
  }
}
