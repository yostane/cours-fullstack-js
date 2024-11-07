# API drive

## Consignes

- Déposer un fichier à la racine de votre dépôt git contenant votre autoévaluation en indiquant:
    - La liste des qestions auxquelles vous avez répondues ou l'inverse,
    - Votre note sur 30
- Si ce fichier est absent, la note sera de 0/30.

## Exercices

> Implémenter une Authentification basic sur tous les endpoints en `/drive`.

1. Implémenter les endpoints `move` en `patch` et `copy` en `post`. Voici un bout de code qui peut vous aider *(2)*.
    - Bonus: Si la destination est un dossier, garder le nom du fichier d'origine.
    ```ts
    // La première étoile est la source et la deuxième est la destination
    driveRouter.patch("/move/*/to/*", async (req, res) => {
    // sortie { "0": "souvenirs/2024/souvenir1.txt", "1": "hello.txt" }
    console.log(req.params);
    res.end();
    });
    ```
    - Par exemple: `move/souvenirs/2024/souvenir1.txt/to/hello.txt` devrait renommer `souvenir1.txt` en `hello.txt` et le placer à la racine du drive.
1. Implémenter le endpoint `driveRouter.delete("/*")` qui supprime un fichier ou dossier récursivement *(1)*.
    - ☠️ !!!! attention à ne pas supprimer des fichiers de votre PC autre ce qu'il y a dans drive !!!!
1. Implémenter un `post /md/*` qui prend en body un texte format markdown et qui met en gras tout texte "rasengan" avant d'enregistrer le fichier *(1)*.
    - Par exemple, si le fichier contient `rasengan`, il devrait être enregistré avec `**rasengan**`.
1. Implémenter un endpoint `driveRouter.get("/search/:query")` qui retourne les fichiers du drive contenant le texte `query` dans leur nom *(1)*.
1. Implémenter un endpoint `driveRouter.get("/search/content/:query")` qui retourne les fichiers du drive contenant le texte `query` dans leur contenu *(2)*.
1. Implémenter un endpoint `POST /drive/copyitem/*/touser/:destination_login` qui copie le fichier ou dossier de l'utilisateur courant sur le chemin `*` vers la racine du drive de l'utilisateur `destination_login` *(2)*.
    - Si l'utilisateur n'existe pas, retourner un code 404.
    - Si l'utilisateur est le même que celui connecté, retourner un code 400.
    - Par exemple: `POST /drive/copyitem/souvenirs/2024/souvenir1.txt/touser/naruto` devrait copier le fichier `souvenir1.txt` de l'utilisateur courant vers la racine du drive de l'utilisateur `naruto`.
1. Implémenter un endpoint `GET /drive/stats` qui retourne les informations suivantes sur le drive de l'utilisateur connecté : nombre de fichiers, nombre de dossiers, taille totale (en octets), quota (espace max en octets) (en supposant que chaque utilisateur a 1 MO de stockage max) *(1)*.
    - Par exemple: `{ files: 5, folders: 2, size: 500, quota: 1000 }` 

## Exercices rôle admin

> Uniquement les admins peuvent accéder aux endpoints en `/admin`.

1. Modifier la BDD pour définir les rôles "admin" et "user" pour les utilisateurs. Un utilisateur a un rôle `user` par défaut . Définir deux admins dans le script de création de la BDD *(1)*.
    - `gojo` avec le mot de passe `satoru`
    - `nanami` avec le mot de passe `kento`
1. Implémenter un endpoint `GET /admin/stats` qui renvoie les statut de tous les utilisateurs (nombre de fichiers, nombre de dossiers, taille totale, quota) *(1)*.
    - Par exemple: `[ { login: "naruto", files: 5, folders: 2, size: 500, quota: 1000 }, { login: "luffy", files: 5, folders: 2, size: 500, quota: 1000 }, { name: "gojo", files: 5, folders: 2, size: 500, quota: 1000 }, { name: "nanami", files: 5, folders: 2, size: 500, quota: 1000 } ]`
1. Implémenter un endpoint `POST /admin/upgrade/:login` qui met à jour le rôle de l'utilisateur `login` en `admin` *(1)*.
    - Si l'utilisateur a déjà ce rôle, ne rien faire et retourner une 200.
1. Implémenter un endpoint `POST /admin/downgrade/:login` qui met à jour le rôle de l'utilisateur `login` en `admin` *(1)*.
    - Si l'utilisateur a déjà ce rôle, ne rien faire et retourner une 200.
1. Modifier la BDD pour définir la colonne "quota" qui correspond à l'espace de stockage de l'utilisateur. Par défaut, un utilisateur a un quota de 1 MO et implémenter un endpoint `POST /admin/quota/:login/:quota` qui met à jour le quota de l'utilisateur `login` à `quota` *(1)*.
    - Si l'utilisateur n'existe pas, retourner un code 404.
1. Modifier les endpoints existants qui créent ou copient du contenu pour vérifier que l'utilisateur a assez d'espace de stockage pour effectuer l'opération *(2)*.
    - Si l'utilisateur n'a pas assez d'espace, retourner un code 400.
    - Pas la peine de vérifier pour le move (comme il ne crée pas de nouveau fichiers).

## Exercices Middleare

1. Implémenter un middleware qui vérifie que l'utilisateur a le rôle `admin` pour accéder aux routes en `/admin` *(1)*.
1. Implémenter le support des deux schéma d'authentification Bearer et Basic à la fois (sur les routes en `/drive` et en `/admin`). C'est-à-dire que l'on peut passer soit un JWT, soit un authentification basic pour s'authentifier *(2)*.
1. Ajouter un middleware pour les routes en `/drive` qui insère dans la réponse le header `Role` qui a comme valeur le rôle de l'utilisateur *(1)*.
1. Ajouter un middleware global (avec `app.use`) appelé `LoggerMiddleware` qui log dans dans le fichier `[racine du projet]/logs/logs.txt` la date, le chemin et la méthode de chaque requête reçue *(1)*.
    - Par exemple: 
    ```txt
    2021-09-01T12:00:00.000Z GET /drive
    2021-09-01T12:00:01.000Z POST /drive
    2021-09-01T12:00:02.000Z GET /admin
    ```

## Partage de fichiers

> Nous allos utiliser une table `UserShares` qui contient les colonnes `owner_rowid`, `sharedto_rowid` et `owner_file_path`. Cette table permet de partager des fichiers entre utilisateurs. Le script de création de la table est déjà défini dans `CreateDatabase.ts`.

1. Définir un endpoint `POST /drive/share/*` qui partage le fichier `*` avec un autre utilisateur. Le body de la requête doit contenir le login de l'utilisateur avec qui partager le fichier *(2)*.
    - Par exemple: si *kakashi* fait un `POST /drive/share/souvenirs/2024/souvenir1.txt` avec le body `{ "target": "luffy" }`, alors il partage son fichier `souvenir1.txt` avec l'utilisateur `luffy`.
    - Par exemple: si *kakashi* fait un `POST souvenirs/2024/souvenir1.txt` avec le body `{ "target": "naruto" }`, alors il partage son fichier `souvenir1.txt` avec l'utilisateur `naruto`.
1. Définir un endpoint `GET /drive/shares` qui retourne les fichiers partagés de l'utilisateur connecté *(2)*.
    - Par exemple si je suis connecté avec *kakashi* et que j'ai lancé les requêtes d'exemples de l'exercice précédent, j'aurai cette réponse à la requête de l'exercice actuel: `[ { "target": "naruto", "path": "souvenirs/2024/souvenir1.txt" }, { "taget": "luffy", "path": "souvenirs/2024/souvenir2.txt" } ]`
1. Définir un endpoint `GET /drive/shared` qui retourne les fichiers partagés avec l'utilisateur connecté *(2)*.
    - Par exemple si je suis connecté avec *naruto* et que j'ai lancé les requêtes d'exemples du premier exercice, j'aurai cette réponse à la requête de l'exercice actuel: `[ { "owner": "kakashi", file: "souvenirs/2024/souvenir1.txt" } ]`
1. Définir un endpoint `GET /drive/shared/:owner_login/*` qui retourne le contenu du fichier partagé `*` avec l'utilisateur connecté. Renvoyer une 403 si l'utilisateur n'a pas accès au fichier *(2)*.
    - Par exemple: si *naruto* fait un `GET /drive/shared/kakashi/souvenirs/2024/souvenir1.txt`, il devrait recevoir le contenu du fichier partagé par *kakashi*.
    - Par contre, si *naruto* fait un `GET /drive/shared/sasuke/souvenirs/2024/souvenir2.txt`, il devrait recevoir une erreur 403 car il n'a pas accès à ce fichier.
1. Définir un endpoint `DELETE /drive/share/*` qui supprime le partage du fichier `*` avec un autre utilisateur *(2)*.
    - Par exemple: si *kakashi* fait un `DELETE /drive/share/souvenirs/2024/souvenir1.txt` (avec un body vide) alors il supprime le partage de son fichier `souvenir1.txt` avec tous les utilisateurs.
    - Par exemple: si *kakashi* fait un `DELETE /drive/share/souvenirs/2024/souvenir1.txt` avec le body `{ "target": "luffy" }`, alors il supprime le partage de son fichier `souvenir1.txt` avec l'utilisateur `luffy`.


## Points d'amélioration (à faire après le cours)

- Ajouter des tests.
- Remplacer les `console.log` par des logs dans un fichier.
- Dans les endpoints qui ne sont pas en `GET`, passer les chemins dans le body plutôt que sous forme d'un path param.
    - Par exemple: `POST /drive/copy` avec le body `{ "source": "souvenirs/2024/souvenir1.txt", "destination": "backups/backup10.txt" }`.
- Gérer l'upload de tout type de fichier (actuellement, seul les fichiers textes et markdown sont gérés).
    - Astuce: gérer le content-type `multipart/form-data` pour les fichiers.
- Placer le dossier drive dans un NAS ou un service de stockage en ligne.