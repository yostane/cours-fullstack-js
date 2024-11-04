# API drive

## Exercices

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
1. Implémenter un post de fichier markdown (du texte) qui met en gras tout texte "rasengan" avant d'enregistrer le fichier.
    - Par exemple, si le fichier contient `rasengan`, il devrait être enregistré avec `**rasengan**`.
1. Implémenter un endpoint `driveRouter.get("/search/:query")` qui retourne les fichiers du drive contenant le texte `query` dans leur nom.
1. Implémenter un endpoint `driveRouter.get("/search/content/:query")` qui retourne les fichiers du drive contenant le texte `query` dans leur contenu.
