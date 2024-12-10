# React

## Quelques définitions

- Le page d'accueil du site [react.dev](https://react.dev/) ainsi que [react.dev/learn](https://react.dev/learn) proposent une bonne introduction aux composants react.
- Composition : combiner des composants avec d'autres composants.
- Un composant react est une fonction qui retourne du JSX (du HTML dans du JS).

## Projet reactjs avec vite

```sh
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
# Lancer un serveur de développement
npm run dev
# Créer un build de production
npm run build
```

Dans le dossier `src`, créer le dossier `components` et y ajouter un fichier `Hello.jsx`.

- Ajouter un composant `Hello` qui prend un prop `name` et affiche `Hello, {name}`.
- Ajouter un composant `StateDemo` qui illustre l'état local avec `useState`.

## Exercices

### Basique

1. Créer un composant `Counter` qui affiche un bouton `+` et un bouton `-` pour incrémenter et décrémenter un compteur. Initialiser le compteur à 42.
1. Créer un composant `ToLowerCase` qui prend un prop (ou un argument) `text` et affiche le texte en minuscules. (💡 astuce: `string.toLowerCase()`)
1. Créer un composant `EurToYen` qui permet de saisir des euros et affiche le montant en yens (1 euro = 130 yens). (💡 astuce: utiliser `<input type="number" />`)
1. Créer un composant `ShowMax` qui prend deux nombres en props et affiche le plus grand.
1. Créer un composant `Guess` qui affiche un zone éditable numérique et un bouton. A chaque fois que l'utilisateur clique sur le bouton, le composant génère un nouveau nombre aléatoire entre 1 et 10 et affiche si le nombre saisi est trop grand, trop petit ou si c'est le bon nombre. (💡 astuce: utiliser `Math.random()` pour générer un nombre aléatoire).
1. Créer un composant `CountConsonantsAndVowels` qui prend un prop `text` et affiche le nombre de consonnes et de voyelles (aeiuyo) dans le texte. Instancier ce composant dans `<App>` et faire en sorte que le prop soit alimenté via la valeur d'un texte editable isntancié dans `<App>`. (💡 astuce: utiliser `string.match(/[aeiuyo]/gi)` pour compter les voyelles).
1. Créer un composant `Palindrome` qui prend un prop `text` et affiche si le texte est un palindrome ou non. (💡 astuce: utiliser `string.split('').reverse().join('')` pour inverser une chaîne de caractères).
1. Créer un composant `Fibonacci` qui prend un prop `n` et affiche le n-ième terme de la suite de Fibonacci.

??? "Solutions"

    ```jsx title="ExoCounter.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/ExoCounter.jsx
    --8<--
    ```

    ```jsx title="ExoCounter.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/ExoLowerCase.jsx
    --8<--
    ```

    ```jsx title="EuroToYen.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/EuroToYen.jsx
    --8<--
    ```

    ```jsx title="ShowMax.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/ShowMax.jsx
    --8<--
    ```

    ```jsx title="CountConsonantsAndVowels.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/CountConsonantsAndVowels.jsx
    --8<--
    ```

### Listes

1. Créer un composant `ShowLengths` qui prend un prop `items` (un tableau de chaînes de caractères) et affiche chaque élément suivi de sa longueur. (💡 astuce: utiliser `string.length` pour obtenir la longueur d'une chaîne de caractères).
    - Par exemple, si `items = ['un', 'deux', 'trois']`, le composant affiche:
        ```
        un (2)
        deux (4)
        trois (5)
        ```
1. Créer un composant `ShowAlternating` qui prend un prop `items` (un tableau de chaînes de caractères) et affiche les éléments de la liste en alternant les couleurs de fond (par exemple, une ligne sur deux en gris). (💡 astuce: utiliser `index % 2 === 0` pour tester si l'index est pair).
    - Par exemple: si `items = ['un', 'deux', 'trois']`, le composant affiche:
        ```
        un (avec fond gris)
        deux (sans fond)
        trois (avec fond gris)
        ```
1. Créer un composant `LoggerComponent` qui affiche un champ de texte éditable et un bouton **Ajouter**. Chaque fois que l'utilisateur clique sur le bouton **Ajouter**, le texte saisi est ajouté à une liste. Afficher la liste des textes saisis.
    - Par exemple, si l'utilisateur saisit "un", "deux" et "trois", le composant affiche:
        ```
        un
        deux
        trois
        ```
1. Créer un composant `LoggerComponentExtended` qui affiche un champ de texte éditable et un bouton **Ajouter**. Chaque fois que l'utilisateur clique sur le bouton **Ajouter**, le texte saisi est ajouté à une liste contenant également l'horodatage de l'ajout. Afficher la liste.
    - Par exemple, si l'utilisateur saisit "un", "deux" et "trois", le composant affiche:
        ```
        2022-01-01 12:00:00 un
        2022-01-01 12:00:01 deux
        2022-01-01 12:00:02 trois
        ```
1. Créer un composant `EditableLogger` qui affiche un champ de texte éditable et un bouton **Ajouter**. Chaque fois que l'utilisateur clique sur le bouton **Ajouter**, le texte saisi est ajouté à une liste contenant également l'horodatage de l'ajout. 
    - Afficher la liste en permettant d'éditer le corps (pas la date) de chaque ligne élément et de supprimer un élément.
    - Par exemple, si l'utilisateur saisit "un", "deux" et "trois", le composant affiche:
        ```
        2022-01-01 12:00:00 un [Input pour modifier le texte] [Bouton pour supprimer]
        2022-01-01 12:00:01 deux [Input pour modifier le texte] [Bouton pour supprimer]
        2022-01-01 12:00:02 trois [Input pour modifier le texte] [Bouton pour supprimer]
        ```
    - Ajouter les boutons **sauvegarder** et **charger** pour sauvegarder la liste dans le local storage et la charger au démarrage de l'application ou au clique sur le bouton **charger**.

??? "Solutions"

    ```jsx title="StringsLengths.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/StringsLengths.jsx
    --8<--
    ```

    ```jsx title="ShowAlternating.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-react-app/src/components/ShowAlternating.jsx
    --8<--
    ```

### Composition

1. Créer un composant `SocialPost` qui prend en props les propriétés `author`, `date`, `content` et `avatar`. Afficher ces propriétés de façon jolie.
    - Par exemple, si `author = 'Alice'`, `date = '2022-01-01'`, `content = 'Hello world!'` et `avatar = 'alice.jpg'`, le composant affiche (de façon pas jolie):
        ```
        <img src="alice.jpg" alt="Avatar de Alice" />
        <h2>Alice</h2>
        <p>2022-01-01</p>
        <p>Hello world!</p>
        ```
1. Créer un composant `SocialPostList` qui prend en prop `posts` (un tableau d'objets avec les propriétés `author`, `date`, `content` et `avatar`) et affiche une liste de `SocialPost`.
1. Créer un composant `HomePage` qui affiche un logo, un titre et une liste de `SocialPost`. Créer un composant `AboutPage` qui affiche un logo, un titre et un texte de présentation. Dans le composant `App`, afficher les deux liens. Avec un booléen `isHomePage`, afficher soit la page d'accueil, soit la page "à propos" selon le lien sur lequel on clique.


## Router

1. Créer un projet react avec vite et le template react. `npm create vite@latest my-react-app-2 -- --template react`.
1. Préparation
    1. Créer un composant `Home` qui affiche "Bienvenue sur la page d'accueil".
    1. Créer un composant `About` qui affiche "À propos de nous".
    1. Créer un composant `Contact` qui affiche "Contactez-nous".
1. Nettoyer le composant `App`.
    ```jsx
    export default function App() {
        return <></>;
    }
    ```
1. Installer `react-router-dom` avec `npm install react-router-dom`.
1. Dans `src/main.jsx` Créer une table de routage en ajoutant le contenu suivant:
    ```jsx
    import { RouterProvider, createBrowserRouter } from "react-router-dom";
    import Home from "./components/Home.jsx";
    import Contact from "./components/Contact.jsx";
    import About from "./components/About.jsx";
    // Table de routage
    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        ],
    },
    ]);
    ```
    - modifier la partie `createRoot` pour utiliser `<React.StrictMode>` et `<RouterProvider>` (c'est lui va gérer les routes de l'application).
    ```jsx
    ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );
    ```
    - Il faut aussi importer `import ReactDOM from "react-dom/client";`.
    - Fichier complet:
    ??? "src/main.jsx"
        ```jsx
        import React from "react";
        import ReactDOM from "react-dom/client";

        import "./index.css";
        import App from "./App.jsx";

        import { RouterProvider, createBrowserRouter } from "react-router-dom";
        import Home from "./components/Home.jsx";
        import Contact from "./components/Contact.jsx";
        import About from "./components/About.jsx";

        const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            ],
        },
        ]);

        ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
        );
        ```
1. Dans le composant `App`, ajouter un lien vers la page d'accueil, la page "à propos" et la page de contact (`{" - "}` permet de forcer un espace avant et après le -).
    ```jsx
    import { Link } from "react-router-dom";
    export default function App() {
        return (
        <>
            <h1>React router demo</h1>
            <nav>
                <Link to="/home">Accueil</Link>{" - "}
                <Link to="/about">À propos</Link>{" - "}
                <Link to="/contact">Contact</Link>
            </nav>
        </>
        );
    }
    ```
1. Tester l'application en lançant `npm run dev`. Que constatez vous au niveau du rendu de votre app et de la barre d'adresse ?
1. Ajouter le outlet dans le composant `App` pour afficher les pages enfants.
    ```jsx
    import { Outlet } from "react-router-dom";
    export default function App() {
        return (
        <>
            <h1>React router demo</h1>
            <nav>
                <Link to="/home">Accueil</Link>{" - "}
                <Link to="/about">À propos</Link>{" - "}
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </>
        );
    }
    ```
1. Comme les composants sont des pages, il est recommandé de les déplacer dans le dossier `src/pages`. Appliquer cette convention à l'avenir.
1. On peut spécifier des paramètres dans des routes (par exemple pour afficher un item à partir d'une liste).

## Astuces

- Pour activer la colorations des parenthèses, accolades et crochets dans VSCode, activer l'option "Bracket Pair colorization" dans les paramètres.
- L'extension indent-rainbow permet de colorer les indentations.
