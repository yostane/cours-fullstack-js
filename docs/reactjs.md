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

1. Créer un composant `Counter` qui affiche un bouton `+` et un bouton `-` pour incrémenter et décrémenter un compteur. Initialiser le compteur à 42.
1. Créer un composant `ToLowerCase` qui prend un prop (ou un argument) `text` et affiche le texte en minuscules.
1. Créer un composant `EurToYen` qui permet de saisir des euros et affiche le montant en yens (1 euro = 130 yens). (💡 astuce: utiliser `<input type="number" />`)
1. Créer un composant `ShowMax` qui prend deux entiers en props et affiche le plus grand.

## Astuces

- Pour activer la colorations des parenthèses, accolades et crochets dans VSCode, activer l'option "Bracket Pair colorization" dans les paramètres.
- L'extension indent-rainbow permet de colorer les indentations.
