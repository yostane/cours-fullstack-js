# API drive

## Exercices

> Implémenter une Authentification basic sur tous les endpoints de `driveRouter`.

1. Implémenter les endpoints `move` en `patch` et `copy` en `post`. Voici un bout de code qui peut vous aider.
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
1. Implémenter le endpoint `driveRouter.delete("/*")` qui supprime un fichier ou dossier récursivement.
    - ☠️ !!!! attention à ne pas supprimer des fichiers de votre PC autre ce qu'il y a dans drive !!!!
1. Implémenter un `post /md/*` qui prend en body un texte format markdown et qui met en gras tout texte "rasengan" avant d'enregistrer le fichier.
    - Par exemple, si le fichier contient `rasengan`, il devrait être enregistré avec `**rasengan**`.
1. Implémenter un endpoint `driveRouter.get("/search/:query")` qui retourne les fichiers du drive contenant le texte `query` dans leur nom.
1. Implémenter un endpoint `driveRouter.get("/search/content/:query")` qui retourne les fichiers du drive contenant le texte `query` dans leur contenu.
1. Implémenter un endpoint `POST /drive/copyto/:login/*` qui copie le fichier ou dossier à la racine du drive de l'utilisateur `login`.
    - Si l'utilisateur n'existe pas, retourner un code 404.
    - Si l'utilisateur est le même que celui connecté, retourner un code 400.
1. Implémenter un endpoint `GET /drive/stats` qui retourne les informations suivantes sur le drive de l'utilisateur connecté : nombre de fichiers, nombre de dossiers, taille totale (en octets), quota (espace max en octets) (en supposant que chaque utilisateur a 1 MO de stockage max).
    - Par exemple: `{ files: 5, folders: 2, size: 500, quota: 1000 }` 

## Exercices rôle admin

> Uniquement les admins peuvent accéder aux endpoints en `/admin`.

1. Modifier la BDD pour définir les rôles "admin" et "user" pour les utilisateurs. Un utilisateur a un rôle `user` par défaut. Définir deux admins dans le script de création de la BDD:
    - `gojo` avec le mot de passe `satoru`
    - `nanami` avec le mot de passe `kento`
1. Implémenter un endpoint `GET /admin/stats` qui renvoie les status de tous les utilisateurs (nombre de fichiers, nombre de dossiers, taille totale, quota). L'admin est un utilisateur qui a un rôle `admin`.
    - Par exemple: `[ { login: "naruto", files: 5, folders: 2, size: 500, quota: 1000 }, { login: "luffy", files: 5, folders: 2, size: 500, quota: 1000 }, { name: "gojo", files: 5, folders: 2, size: 500, quota: 1000 }, { name: "nanami", files: 5, folders: 2, size: 500, quota: 1000 } ]`
1. Implémenter un endpoint `POST /admin/upgrade/:login` qui met à jour le rôle de l'utilisateur `login` en `admin`.
    - Si l'utilisateur a déjà ce rôle, ne rien faire et retourner une 200.
1. Implémenter un endpoint `POST /admin/downgrade/:login` qui met à jour le rôle de l'utilisateur `login` en `admin`.
    - Si l'utilisateur a déjà ce rôle, ne rien faire et retourner une 200.
1. Modifier la BDD pour définir la colonne "quota" qui correspond à l'espace de stockage de l'utilisateur. Par défaut, un utilisateur a un quota de 1 MO.
1. Implémenter un endpoint `POST /admin/quota/:login/:quota` qui met à jour le quota de l'utilisateur `login` à `quota`.
    - Si l'utilisateur n'existe pas, retourner un code 404.
1. Modifier les endpoints existants qui créent ou copient du contenu pour vérifier que l'utilisateur a assez d'espace de stockage pour effectuer l'opération.
    - Si l'utilisateur n'a pas assez d'espace, retourner un code 400.
    - Pas la peine de vérifier pour le move (comme il ne crée pas de nouveau fichiers).