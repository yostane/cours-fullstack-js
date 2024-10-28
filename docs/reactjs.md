# React

## Quelques définitions

- Le page d'accueil du site [react.dev](https://react.dev/) ainsi que [react.dev/learn](https://react.dev/learn) proposent une bonne introduction aux composants react.
- Composition : combiner des composants avec d'autres composants.
- Un composant react est une fonction qui retourne du JSX (du HTML dans du JS).

## Projet reactjs avec vite

```sh
npm create vite@latest my-vue-app -- --template react
cd my-vue-app
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
    2024-2025/2INFO-web-interm/my-vue-app/src/components/ExoCounter.jsx
    --8<--
    ```

    ```jsx title="ExoCounter.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-vue-app/src/components/ExoLowerCase.jsx
    --8<--
    ```

    ```jsx title="EuroToYen.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-vue-app/src/components/EuroToYen.jsx
    --8<--
    ```

    ```jsx title="ShowMax.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-vue-app/src/components/ShowMax.jsx
    --8<--
    ```

    ```jsx title="CountConsonantsAndVowels.jsx"
    --8<--
    2024-2025/2INFO-web-interm/my-vue-app/src/components/CountConsonantsAndVowels.jsx
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

### Composition

1. Créer un composant `SocialPost` qui prend en props les propriétés `author`, `date`, `content` et `avatar`. Afficher ces propriétés de façon jolie.
    - Par exemple, si `author = 'Alice'`, `date = '2022-01-01'`, `content = 'Hello world!'` et `avatar = 'alice.jpg'`, le composant affiche:
        ```
        <img src="alice.jpg" alt="Avatar de Alice" />
        <h2>Alice</h2>
        <p>2022-01-01</p>
        <p>Hello world!</p>
        ```
1. Créer un composant `SocialPostList` qui prend en prop `posts` (un tableau d'objets avec les propriétés `author`, `date`, `content` et `avatar`) et affiche une liste de `SocialPost`.
1. Créer un composant `HomePage` qui affiche un logo, un titre et une liste de `SocialPost`. Créer un composant `AboutPage` qui affiche un logo, un titre et un texte de présentation. Dans le composant `App`, afficher les deux liens. Avec un booléen `isHomePage`, afficher soit la page d'accueil, soit la page "à propos" selon le lien sur lequel on clique.


## Astuces

- Pour activer la colorations des parenthèses, accolades et crochets dans VSCode, activer l'option "Bracket Pair colorization" dans les paramètres.
- L'extension indent-rainbow permet de colorer les indentations.
