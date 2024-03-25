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

- [react.dev](https://react.dev/) propose une belle introduction aux composants react
- Exercice de création de composant avec props en entrée
  - Pour corriger [l'avertissement sur la validation des props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md), utiliser [prop-types](https://www.npmjs.com/package/prop-types).
- Consultation du site: [react.dev/learn](https://react.dev/learn)
- Guide pour ajotuer [react router](https://github.com/ErickKS/vite-react-router)
  - [map, filter, reduce animé](https://navin-moorthy.github.io/blog/map-filter-reduce-animated/)
- Intégration de [firebase](https://medium.com/@sanchit0496/google-firebase-and-reactjs-integration-74855ec024ec)

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
```

firebaserc

```json
{
  "projects": {
    "default": "nom du projet"
  }
}
```

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

// map => à prendre dans le sens de mise en correspondance de deux valeur (mapping)
const numbers = [10, 2, -3, 4, 55];
const newNumbers = numbers.map(n => n + 10);
console.log("numbers", numbers);
console.log("newNumbers", newNumbers);
const newStrings = numbers.map(n => `Hello ${n}`);
console.log("newStrings", newStrings);

// Objet litéral
const streetFighter1 = {
  name: "ryu",
  specialArrack: "Hadoken"
};
// Objet litéral qui ressemble au JSON -> JS Object Notation
const streetFighter2 = {
  "name": "Sagat",
  "specialArrack": "Tiger Uppercut"
};
console.log(streetFighter1, streetFighter2);
```
