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

Dans cette partie, nous allons aborder les possibilités offertes par les LLM pour le web.

Il y a deux possibilités; soit héberger le LLM sur un serveur et l'appeler via une API REST, soit utiliser un modèle embarqué dans le navigateur.

La première solution est plus simple et offre généralement plus de possibilités et de performance.
La seconde est plus complexe et son temps de réponse dépend de la machine de l'utiliser.
Il faut également souligner que la première solution n'est pas adaptée app web côté client, car elle expose votre clé API.
Pour les serveur et les applications web générées côté serveur, la clé d'API doit être sécurisée pour n'être vue que du serveur.

### Inférence sur LLM via des API REST

Comme il existe plusieurs fournisseurs de LLM qui n'ont pas forcément la même API, il est recommandé d'utiliser une librairie qui abstrait ces différences.
Pour ce faire, nous allons utiliser [langchain.js](https://js.langchain.com/) dans cette partie.
Cette libraire supporte plusieurs fournisseurs de LLM et offre une API unifiée ainsi que des fonctionnalités supplémentaires.
Pour compléter, nous allons prendre une API gratuite parmi celles [proposées ici](https://github.com/cheahjs/free-llm-api-resources/blob/main/README.md)

-   `bun init` puis ouvrir le dossier et faire un `bun install`
-   Ajouter un fichier `.env` qui contient votre clé d'API (bun lit nativement les dotenv sans rien faire de notre côté)
-   Suivre la doc [google AI pour langchain](https://js.langchain.com/docs/integrations/platforms/google/) (en remplaçant `npm` par votre gestionnaire de paquêts)
    -   Utiliser un modèle Flash pour avoir plus de requêtes par minutes
-   Développer un équivalent de chatGPT qu'on va appeler chatGTP (chat j'ai TP) qui prend en entrée un texte et génère une réponse. Soyez créatifs !.
    -   Bun support la récupération des argument de la ligne de commande. Voici [la doc](https://bun.sh/guides/process/argv).
    -   Exemple d'utilisation à la racine du projet: `bun run chatGTP "Hello, how are you?"` -> `Hello, I'm fine, thank you. How can I help you?`
    -   Astuces: [marked-terminal](https://www.npmjs.com/package/marked-terminal) permet d'écrire du markdown dans la console. [chalk](https://www.npmjs.com/package/chalk) permet de colorer le texte.
-   Aller plus loin:
    -   Implémenter une mémoire basique [sur disque](https://js.langchain.com/docs/integrations/memory/file)
    -   Utiliser du [tool calling](https://js.langchain.com/docs/how_to/tool_calling/)

### LLM embarqué dans le navigateur

!!! note

    Au momemnt de l'écriture de ce document (janvier 2025), les navigateurs n'embarquent pas de LLM.
    Chrome a fait une annonce [à ce sujet en 2024](https://developer.chrome.com/docs/ai/built-in).
    Donc, pour le moement, il faut utiliser des librairies tierces pour embarquer un LLM dans le navigateur.

Je propose de travailler sur ces deux librairies d'inférence de LLM dans le navigateur: [Transformers.js](https://github.com/huggingface/transformers.js) et [WebLLM](https://webllm.mlc.ai/).

#### Méthode de travail conseillée

Il est recommandé d'utiliser un bundler pour simplifier l'importation des libraires.
Nous allons utiliser [vite](https://vite.dev/guide/#scaffolding-your-first-vite-project) pour ce faire.
Nous allons également utiliser [bun](https://bun.sh/) comme gestionnaire de projet.

-   Créer un projet vite de type vanilla (sans framework) en TypeScript: `bun create vite langchainjs_demo --template vanilla-ts`
    -   `cd langchainjs_demo` puis `bun install`, puis `bun dev`
-   Ouvrir le projet avec votre IDE

#### Transformers.js

[Transformers.js](https://github.com/huggingface/transformers.js) est une librairie qui permet d'utiliser les modèles de Hugging Face dans le navigateur.
Il est [recommandé d'utiliser](https://www.reddit.com/r/LocalLLaMA/comments/177ir3x/comment/k4t87uu) les modèles proposés par [Xenova](https://huggingface.co/Xenova) pour tirer parti du WebGPU.
D'ailleurs, ce dernier propose [plusieurs démos](https://huggingface.co/collections/Xenova/transformersjs-demos-64f9c4f49c099d93dbc611df)

-   Nous allons utiliser le modèle `phi3.5-webgpu`.
-   Copier dans src le fichier [worker.js](https://github.com/huggingface/transformers.js-examples/blob/main/phi-3.5-webgpu/src/App.jsx)
    -   Ce web worker contient le code pour charger le modèle et faire des inférences
-   Le worker écoute les messages suivants:
    -   `{type: "load"}`: pour charger le modèle
    -   `{type: "check"}`: lance une exception si il y un souci côté WebGPU
    -   `{type: "generate", data: messages}`: envoie un message pour générer du texte.
        `messages` est un tableau de `Message` définit par la libraire transformers.js ainsi `export type Message = {role: string; content: string};`.
        Exemple de message: `[{role: "user", content: "Hello"}]`
-   Le worker envoie des messages différentes selon la valeur de `e.data.status`:
    -   `"loading"`: Début du chargement
    -   `"progress"`: Rapporte la progression du chargement
    -   `"ready"`: Signale que le modèle est chargé
    -   `"start"`: Signale que le texte est en début de génération
    -   `"update"`: Signale que le texte est en cours de génération
    -   `"complete"`: Signale que le texte a été généré
    -   `"error"`: Signale une erreur
-   Implémenter un formulaire pour envoyer des messages au worker.
-   Pour avoir un échange avec mémoire, il faut mettre à jour `messages` à chaque message reçu et envoyé.
    Par exemple, si le modèle répond "Hello", `messages` deviendrait `[...messages, {role: "assistant", content: "Hello, how can I help?"}]`.
    Et, si par la suite, l'utilisateur demande "How are you?", l'objet `messages` à envoyer au LLM serait `messages` serait
    ```js
    [
        { role: "user", content: "Hello" },
        { role: "assistant", content: "Hello, how can I help?" },
        { role: "user", content: "How are you?" },
    ];
    ```

#### WebLLM

A expérimenter selon le temps restant.

## Ressources

-   [Best Bolt.New Alternatives for Your AI App](https://medium.com/@conor_16413/best-bolt-new-alternatives-for-your-ai-app-f9c7fc50fc89)
-   [Top Bolt.new Alternatives](https://topai.tools/alternatives/bolt-new)
