# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Démarrer un nouveau projet react + vite

- Installer [nodejs](https://nodejs.org/)
- Initier un nouveau projet: `npm create vite@latest my-react-app -- --template react`
- Ensuite faire ces commandes:

```sh
cd my-react-app # ouvrir le projet dans le terminal
npm install # Installer les dépendances dans package.json (vers node_modules)
npm run dev # Lancer le projet en local (via un serveur de développement)
```

- Pour corriger [l'avertissement sur la validation des props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md), utiliser [prop-types](https://www.npmjs.com/package/prop-types).

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
