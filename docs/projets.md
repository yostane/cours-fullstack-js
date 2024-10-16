# Projets

## Projet CRUD avec ReactJS

Réaliser une application CRUD avec le thème de votre choix.

- Fonctionnalités vues en cours appliquées à votre projet (5 pts)
  - Authentification
  - Rôle "utilisateur" connecté
  - Ajout / suppression de favoris
  - Affichage et suppression d'éléments
  - Utiliser les services BDD et authent de Firebase
  - Utiliser Firebase hosting pour héberger le site.
- Proposer 2 écrans supplémentaires (via le routage)
  - Ecran de profil (2 pts)
  - Ecran des favoris de l'utilisateur connecté (3 pts)
- Ajouter une gestion des rôles suivants (en plus du rôle "utilisateur" déjà présent):
  - Invité (non connecté) qui peut lister uniquement (2 pts)
  - Administrateur qui peut supprimer et éditer des données (4 pts)
- Belle interface et plus travaillée par rapport au projet vu en cours (4 pts)
- Pour chaque bogue trouvé, il y aura des points en moins.

Il est possible de se faire aider par de l'IA générative de façon raisonnable (tant qu'on arrive à expliquer le code correctement).
Par contre, il n'est pas autorisé de rendre le résultat d'un tutoriel (sinon, la note sera de 0)

## veterlib

Réaliser un application de prise de rdv pour animaux chez un vétérinaire.

- On peut s'inscrire en tant que vétérinaire ou patient
- Les patients peuvent prendre un rdv auprès d'un véto
- L'API permet de listes les créneaux disponible par jour et par vétérinaire
- Un vétérinaire peut demande son agenda à l'API
- Hypothèses:
  - Les rdv durent 30m
  - Les vétérinaires travaillent du lundi au vendredi de 9h à 18h non stop

## Project d'API de gestion de fichiers de type "Drive"

### Sujet

- L'utilisateur doit avoir un compte ou créer un compte pour utiliser le service
- Possibilité d'uploader, télécharger, modifier et supprimer les fichiers
- Possibilité de créer des dossiers et de placer les fichiers dans les dossiers
- Possibilité de partager des fichiers pour d'autres utilisateurs via leur email
- Lien de partage public et génération de l'image QRCode de ce lien

### Outils et librairies utilisés

- [jest est une librairie test runner et un test runner](https://dev.to/nathan_sheryak/how-to-test-a-typescript-express-api-with-jest-for-dummies-like-me-4epd)
  - Librairie test: permet de définir des tests dans le code (`expect`, `test`, etc.)
  - Test runner: permet d'exécuter des tests et de générer un rapport à la fin
- [prettier et .prettierrc](https://github.com/jonas-pietzsch/node-express-typescript-boilerplate/blob/master/.prettierrc): permet d'automatiquement appliquer des convention de programmation.
- [TypeScript et son fichier de configuration tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [docker-compose.yml](https://docs.docker.com/compose/intro/features-uses/) permet de configurer [l'image BDD postgres](https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/) utilisée pour l'environnement de dev
  - Installer docker et docker-composer ou podman et podman-compose
  - Instructions pour podman: `scoop install podman` puis `pip3 install podman-compose` ou `pip install -r requirements.txt`
- [dotenvx permet d'avoir plusieurs fichiers d'environnements](https://github.com/dotenvx/dotenvx). Consulter la partie `scripts` dans package.json pour voir des exemples d'utilisation (exemple plus bas en annexe).
- [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript) est un ORM basé sur sequelize et optimisé pour TypeScript.
- `tsoa` (json open api) + Swagger UI. tsoa permet de générer la documentation de l'API au formats openAPI ou swagger. Swagger UI permet de générer l'interface web qui permet d'explorer
  - [tuto1](https://medium.com/ms-club-of-sliit/building-rest-api-with-express-js-typescript-and-swagger-387a9c731717)
  - `Concurrently` permet de de lancer deux plusieurs tâches en temps. Il nous sert à lancer en même temps la génération du fichier openAPI et l'exécution du serveur de dev.
  - Utiliser [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript) pour une meilleure intégration avec tsoa comparé à sequelize
- Journalisation des appels avec le middleware [Morgan](https://www.npmjs.com/package/morgan)
- Gestion du content-type de type `multipart/form-data` avec [multer](https://expressjs.com/en/resources/middleware/multer.html). Cette librairie permet de récupérer certaines parties du body dans dans des fichiers, ce qui est utile pour implémenter la fonctionnalité d'upload.
- [Passport.js](https://www.passportjs.org/) et [passport-jwt](https://www.passportjs.org/packages/passport-jwt/), permettent de rajouter un middleware qui vérifie la présence du token jwt dans le header `Authorization` sur les routes qu'on souhaite protéger. Il nous donne ainsi la possibilité de renseigner le champ `req.user` avec l'utilisateur courant.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) permet de générer un JWT
- Penser à faire un `npm i --save-dev @types/[librariejs]` pour qu'elle soit mieux reconnue et documentée quand on code en TypeScript. Par exemple `npm i --save-dev @types/morgan @types/jsonwebtoken`.

### Annexe

- Exemple de fichier de configuration d'un environnement de dev

```txt
ENVIRONMENT=dev
DB_DIALECT=postgres
DB_USER=dev_user
DB_PASSWORD=dev_pwd
DB_DATABASE=awesomeapi
```

- Exemple d'interface swagger

![swagger](./img/swagger.png)

## Project d'API de gestion de fichiers simple

Proposer une api REST qui permet de stocker des fichiers avec leurs métadonnées (nom, taille, url, etc.).

### Sujet

- Compléter l'API pour avoir toutes les routes CRUD manquantes (PUT, PATCH, DELTE d'un fichier) fonctionnelles avec une BDD sqlite. (5 pts)
- Proposer une route GET `/qrcode/:id` qui fournit le lien d'un fichier sous forme d'une image QRCode (💡 utiliser la lib [qrcode](https://www.npmjs.com/package/qrcode)) (1 pts)
- Proposer une route GET `/filter/images` qui liste les images (fichiers avec les extensions png, jpg, jpeg, gif et svg). Les autres fichiers ne doivent pas être listés. (1 pts)
- Proposer une route GET `/check/id:` qui vérifie si l'url du fichier est joignable (💡 via une requête HEAD par exemple, 💡 vous pouvez utiliser [axios](https://axios-http.com/fr/) pour faire la requête) (1 pt)
- Proposer une route GET `/sort/descending` qui affiche les fichiers triés par ordre décroissant de taille. (1 pts)
- Proposer une route GET `/search/:name` qui permet de rechercher les fichiers qui contiennent le mot `:name` dans leurs noms. (1 pts)
- Proposer une route GET `/lastdays/:days` qui affiche les fichiers qui ont été modifiés ou créés dans les `:days` derniers jours. (1 pts)
- Proposer une route GET `/latestfiles/:count` qui affiche les `:count` derniers fichiers qui ont été créés. (1 pts)
- Proposer une route DELETE `/large/:size` qui supprime les fichiers dont la taille dépasse strictement `:size`. Dans le cas où aucun fichier n'a été supprimé, renvoyer une 204. Si au moins un fichier a été supprimé, renvoyer une 200. (2 pt)
- Proposer une route PATCH `/rename/:oldDomain/:newDomain` qui remplace tous les domaines `:oldDomain` par `:newDomain` dans le champ url. (3 pts)
- Proposer une route GET `/stats/total` qui calcule et retourne l'objet suivant avec les bonnes valeurs (3 pts) (astuce utiliser `findOne` et `sequelize.fn`):

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

### Liens utils

- [Applying where clauses in sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses)
- [sequelize.fn pour faire des agrégations](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries)
- [Autre exemple de sequelize.fn pour faire des agrégations](https://www.slingacademy.com/article/sequelize-js-aggregation-sum-average-min-max/)
