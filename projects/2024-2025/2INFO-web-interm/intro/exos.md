# Exercices

> Utiliser `filter` et `map` et les objets littéraux.

1. Créer une fonction qui prend un tableau d'entiers et retourne le triple des éléments pairs et le double des éléments impairs.
1. Créer une fonction qui prend un tableau de chaînes de caractères et retourne un tableau contenant la longueur de chaque chaîne.
    - Par exemple pour `['un', 'deux']` on obtient `[2, 4]`
1. Créer une fonction qui prend un tableau de chaînes de caractères et retourne un tableau d'objets avec le format suivant: `[{text: 'valeur du texte', length: 4}, ...]`
    - Par exemple pour `['un', 'deux']` on obtient `[ { text: 'un', length: 2 }, { text: 'deux', length: 4 } ]`
1. Créer une fonction qui tableau d'objets avec le format suivant `[{text: 'valeur du texte', length: 4}, ...]` et affiche dans la console deux tableaux: un avec les textes et un avec les longueurs.
    - Par exemple pour `[ { text: 'un', length: 2 }, { text: 'deux', length: 4 } ]` on obtient l'affichage suivant dans la console: `['un', 'deux'] [2, 4]`
1. Refaire le même exercice que précédemment mais ignorant les mots dont la longueur est un nombre premier (il ne figurant pas dans l'affichage final).
    - Par exemple pour `[ { text: 'aa', length: 2 }, { text: 'bbbb', length: 4 }, { text: 'ccccc', length: 5 } ]` on obtient l'affichage suivant dans la console: `['bbbb'] [4]`
1. Créer une fonction qui prend deux arguments: un tableau d'objets Todo `[{id:1, title:"..", completed: true/false}, ...]` et un entier. La fonction doit retourner le tableau de Todos en basculant (toggle) le statut de `completed` pour le Todo dont l'id est égal à l'entier passé en argument.
    - Par exemple pour `[{id:1, title:"..", completed: true}, {id:2, title:"..", completed: false}]` et `2` on obtient `[{id:1, title:"..", completed: true}, {id:2, title:"..", completed: true}]`
    - Par exemple pour `[{id:1, title:"..", completed: true}, {id:2, title:"..", completed: false}]` et `1` on obtient `[{id:1, title:"..", completed: false}, {id:2, title:"..", completed: false}]`
1. Créer une fonction qui prend un tableau d'objets Todo (voir exo précédent) et renvoie le titre des todos terminés.
    - Par exemple: `[{id:1, title:"Todo 1", completed: true}, {id:2, title:"Todo 2", completed: false}]` on obtient `['Todo 1']`

## Astuces

- Si besoin, vous pouvez utiliser [Math.random](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random), pour générer des nombres aléatoires.
