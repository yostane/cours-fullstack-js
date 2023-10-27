function add(x: number, y: number): number {
  return x + y;
}

// Conseil: Ne jamais déclrer avec let sauf si nécessaire
let n = 10;
n = 20;
// à la place, faire du const par défaut et changer en let si besoin
// const -> variable non réassignable (x = valeur)
const message = "Hello";

add(20, 10);
console.log("hello");
