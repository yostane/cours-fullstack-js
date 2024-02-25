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

## Affichage des icones

- Lancer cette commande dans un terminal ouvert à la racine du projet:
  - `npm install @mdi/font -D`
  - Elle installe icones de type **mdi** (medium density icons)
- Dans main.js, ajouter cet import: `import '@mdi/font/css/materialdesignicons.css'`
- Et c'est tout bon !
  - Pour plus de détails, voici une [doc de référence](https://vuetifyjs.com/en/features/icon-fonts/#material-design-icons)

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
import { getCurrentUser } from "vuefire";

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

// Pour récupérer l'utilisateur actuel. A mettre avant le app.use(router)
router.beforeEach(async () => {
  await getCurrentUser();
});
```

### Authentification

- [Authentification avec login et mdp](https://firebase.google.com/docs/auth/web/password-auth)

```js
// Ne pas permettre l'affichage de la vue login si on est déjà conneté
// ⚠ Ceci est juste esthétique
router.beforeEach(async (to) => {
  const currentUser = await getCurrentUser();
  if (to.name === "login" && currentUser) {
    return { name: "home" };
  }
});
```

### Firestore

- Créer une base de données Firestore
  - En mode production
  - Choisir une région Europe pour avoir le meilleur temps de réponse
- Et remplacer la règle de sécurité existante par celle là:

```js
// Allow read on all documents for everyone
// Allow write on all documents only for logged-in users
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if (request.auth.uid != null);
    }
  }
}
```

## Déployer sur Firebase

- Installer le CLI Firebase: `npm install -g firebase`
- Se connecter sur le CLI avec `firebase login`
- Se positionner à la racine du projet et le lier à Firebase avec `firebase init`
  - Répondre selon votre choix concernant le collecte des usages
  - _Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices._
    - Avec les flèches, naviguer jusque **"Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action"**
    - Appuyer sur la touche _espace_
    - Appuyer sur _entrée_
  - _Please select an option_ -> **Use an existing project**
  - _Select a default Firebase project for this directory_ -> Choisir votre projet firebase
  - _What do you want to use as your public directory?_ -> taper **dist**
  - _Set up automatic builds and deploys with GitHub?_ -> Comme vous le souhaitez mais ce n'est pas couvert pas ce cours
- Générer le site de production `npm run build`
- Déployer le site `firebase deploy`
