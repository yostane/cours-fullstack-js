// Objets littéraux
const saiyajin1 = {
  name: "Sans le cou",
  power: 2000,

  launchAttack: function () {
    console.log("Kamehameha");
  },
};

const saiyajin2 = {
  name: "Végétal",
  power: 1900,
};

const saiyajin3 = {
  name: "Truc muche",
  power: 1500,
  age: 8,
};

console.log(saiyajin1.name);
saiyajin1.launchAttack();

function printPowerful(saiyajinA, saiyajinB) {
  const result =
    saiyajinA.power > saiyajinB.power ? saiyajinA.name : saiyajinB.name;
  console.log(result);
}

printPowerful(saiyajin1, saiyajin2);
printPowerful(saiyajin3, { name: "Go âne", power: 1700 });
