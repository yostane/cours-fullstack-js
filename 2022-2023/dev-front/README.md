# vuejs-4dig-22-23

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Ajout de firebase

- Créer un projet sur [console.firebase.google.com/](https://console.firebase.google.com/)
  - Vous pouvez désactiver analytics
- Ensuite dans l'accueil, choisir d'ajouter une application de type web
- Renseigner le nom de l'application et noter les informations de votre application (apiKey, etc.)
- Ouvrir une terminal dans le dossier racine du projet (où se situe le fichier package.json) et isntaller les librairies firebase et vuefire. `npm i vuefire firebase`.
- Dans le dossier src, créer un fichier `firebase.js` et renseigner les informations de votre application (apiKey, etc.)

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

export const firebaseApp = initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});
export const database = getDatabase(firebaseApp);
export const firestore = getFirestore(firebaseApp);
```

- Dans main.js, installer la librairie VueFire

```js
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebase";

app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});
```

- Pour récupérer l'utilisateur actuel, ajouter cet appel dans main.js

```js
router.beforeEach(async () => {
  await getCurrentUser();
});
```

- [Authentification avec login et mdp](https://firebase.google.com/docs/auth/web/password-auth)
