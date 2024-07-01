# Project d'API de gestion de fichiers simple

Proposer une api REST qui permet de stocker des fichiers avec leurs métadonnées (nom, taille, url, etc.).

## Sujet

- Compléter l'API pour avoir toutes les routes CRUD manquantes (PUT, PATCH, DELTE d'un fichier) fonctionnelles avec une BDD sqlite. (5 pts)
- Proposer une route GET `/:id/qrcode` qui fournit le lien d'un fichier sous forme d'une image QRCode (astuce: utiliser la lib [qrcode](https://www.npmjs.com/package/qrcode)) (1 pts)
- Proposer une route GET `/images` qui liste les images (fichiers avec les extensions png, jpg, jpeg, gif et svg). Les autres fichiers ne doivent pas être listés. (1 pts)
- Proposer une route GET `/id:/check` qui vérifie si l'url du fichier est joignable (via une requête HEAD par exemple) (1 pt)
- Proposer une route GET `/descending` qui affiche les fichiers triés par ordre décroissant de taille. (1 pts)
- Proposer une route GET `/search/:name` qui permet de rechercher les fichiers qui contiennent le mot `:name` dans leurs noms. (1 pts)
- Proposer une route GET `/lastdays/:days` qui affiche les fichiers qui ont été modifiés ou créés dans les `:days` derniers jours. (1 pts)
- Proposer une route GET `/latestfiles/:count` qui affiche les `:count` derniers fichiers qui ont été créés. (1 pts)
- Proposer une route DELETE `/large/:size` qui supprime les fichiers dont la taille dépasse strictement `:size`. Dans le cas où aucun fichier n'a été supprimé, renvoyer une 204. Si au moins un fichier a été supprimé, renvoyer une 200. (2 pt)
- Proposer une route PATCH `/:oldDomain/:newDomain` qui remplace tous les domaines `:oldDomain` par `:newDomain` dans le champ url. (3 pts)
- Proposer une route GET `/total` qui calcule et retourne l'objet suivant avec les bonnes valeurs (3 pts):

```json
{
  "totalSize": 123456,
  "totalFiles": 123,
  "maxSize": 123456,
  "minSize": 123,
  "averageSize": 123,
  "lastUpdatedAt": "2021-01-01T00:00:00.000Z"
}
```

## Liens utils

- [Applying where clauses in sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses)
