# Maitrise des api rest

- [Code](https://github.com/yostane/cours-fullstack-js/tree/master/projects/2023-2024/api-rest-maitrise)
- [tuto jest express](https://dev.to/nathan_sheryak/how-to-test-a-typescript-express-api-with-jest-for-dummies-like-me-4epd)

## Etapes

- Initaliser un projet express
- Ajouter les fichiers tsconfig et jest.config.js `npx ts-jest config:init`
- [dotenvx permet d'avoir plusieurs fichiers d'environnements](https://github.com/dotenvx/dotenvx)

```env
DB_DIALECT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

- Base de données locale [postgres via un container](https://www.docker.com/blog/how-to-use-the-postgres-docker-official-image/)
  - Installer docker et docker-composer ou podman et podman-compose
  - `scoop install podman` puis `pip3 install podman-compose` ou `pip install -r requirements.txt`

- tsoa (json open api) + Swagger UI. [tuto1](https://medium.com/ms-club-of-sliit/building-rest-api-with-express-js-typescript-and-swagger-387a9c731717)

- Logging avec Morgan
