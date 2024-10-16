class Pokemon {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  talk() {
    console.log(this.name, this.name);
  }
}

const p1 = new Pokemon("Salah mèche", 100);
const p2 = new Pokemon("Pic à chou", 20);
const p3 = new Pokemon("Drap qu'au feu", 40);

p1.talk();
p2.talk();
p3.talk();
