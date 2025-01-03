# Web et genAI

Nous allons aborder les liens entre ces deux technologies à travers ces axes.

-   Utilisation d'outils de genAI pour générer:
    -   Des sites web
    -   Des images
    -   Des designs
-   Utilisation des API web pour faire de l'inférence sur des LLM
-   Outils divers: gradio, [cursor](https://www.cursor.com/)

## Génération via la genAI

### Génération de sites

Il vous est demandé d'utiliser les deux outils suivants pour générer des sites web.

-   Outils: [v0.dev](https://v0.dev/), [bolt.new](https://bolt.new/) et [marblism](https://www.marblism.com/)
-   Objectif: générer un site web à partir d'un texte généré par un LLM
-   Applications:
    -   Gestionnaire de tâches (Todo list)
    -   Blog avec gestion de l'authentification (avec auth0)
    -   Un site dont le thème est de votre choix
-   Travail demandé:
    -   Générer chaque site proposé avec chacun des outils (en faisant du prompt engineering)
    -   Télécharger et tester le code généré en local
    -   Critiquer la qualité le site généré. Un readme qui liste vos opinions sur:
        -   La vitesse de Génération
        -   La qualité des explications fournies par l'IA
        -   La qualité du code généré
        -   La simplicité d'exécution en local
        -   La facilité à personnaliser
        -   Tout autre point que vous jugerez pertinent
    -   Ajouter dans le readme l'enchaînement des prompts utilisés
    -   Proposer des améliorations
    -   Vous pouvez vous faire aider d'autres outils ChatGPT, ClaudeAI ou copilotAI pour chacune des étapes

### Génération d'images

-   Outils: [DALL-E](https://openai.com/dall-e/), [Adobe Firefly](https://firefly.adobe.com/), [Canva AI](https://www.canva.com/fr_fr/generateur-image-ia/)
-   Travail demandé:
    -   Générer un logo pour votre site
    -   Générer des images pour les différents sites générés plus haut

### Générer un design

-   Outils: [Le plugin Figma uidesign.ai](https://uidesign.ai/), [uizard](https://app.uizard.io/prototypes/generate)

## Web et LLM

Dans cette partie, nous allons utiliser [langchain.js](https://js.langchain.com/) pour faire de l'inférence sur des LLM.

### Langchain.js sur navigateur

Il est recommandé de passer par un bundler pour simplifier l'importation des libraires.
Nous allons utiliser [vite](https://vite.dev/guide/#scaffolding-your-first-vite-project) pour ce faire.
Nous allons également utiliser [bun](https://bun.sh/) comme gestionnaire de projet.

-   Créer un projet vite de type vanilla (sans framework) en TypeScript: `bun create vite langchainjs_demo --template vanilla-ts`
    -   `cd langchainjs_demo` puis `bun install`, puis `bun dev`
-   Ouvrir le projet avec votre IDE
-   Installer la librairie de base `bun i langchain @langchain/core`
-   Ensuite, installer les librairies correspondant aux fournisseurs que vous souhaitez utiliser ([liste ici](https://js.langchain.com/docs/tutorials/llm_chain#using-language-models)).
    -   Exemple avec OpenAI: `bun i @langchain/openai`
    -   Ajouter une varialbe d'environnement `OPENAI_API_KEY`. Il y a plusieurs façons de le faire.
        -   Créer un fichier `.env` à la racine du projet et y ajouter `OPENAI_API_KEY=your_api_key`. Bun supporte nativement les fichiers `.env`.
        -   Ajouter la variable d'environnement dans votre terminal: `export OPENAI_API_KEY=your_api_key`
        -   Ajouter la variable dans votre système d'exploitation

## Ressources

-   [Best Bolt.New Alternatives for Your AI App](https://medium.com/@conor_16413/best-bolt-new-alternatives-for-your-ai-app-f9c7fc50fc89)
-   [Top Bolt.new Alternatives](https://topai.tools/alternatives/bolt-new)
