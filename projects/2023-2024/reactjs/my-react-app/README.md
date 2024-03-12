# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Notions de JS

```js
class Video {
  constructor(title, description){
    self.title = title;
    self.description = description;
  }
}

const video = new Video("mon titre", "ma description");

// Objet litéral
const video2 = {
  title: "mon titre 2",
  description: "description 2"
}

const x = 10;
const text = "Hello";

console.log(video2, video2.title);

let result = "";
if(x % 2 === 0){
  result = "pair";
} else {
  result = "impair";
}

// Opérateur ternaire
let result2 = x%2 === 0 ? "pair" : "impair";

console.log(2 + "2", 1 == "1", 1 === "1", 1 === 1);
console.log(1 != "1", 1 !== "1", 1 !== 1)
```
