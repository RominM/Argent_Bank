# Project 13 - Utilisez une API pour un compte utilisateur bancaire avec React

[![Netlify Status](https://api.netlify.com/api/v1/badges/5b241fbe-31e6-4371-9c35-77ccc57ca66d/deploy-status)](https://app.netlify.com/sites/argentbank-rm/deploys)

## Getting Started

This project was bootstrapped with Create React App and use

-  React (17.0.2)
-  Redux (7.2.6)
-  React router (6.0.2)
   We recommend to use [Visual Studio Code](https://code.visualstudio.com/) to edit and launch this project and lastest version of [Chrome](https://www.google.fr/chrome/) browser with [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/) plugin and [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/) plugin

## Prerequisites

-  [NodeJS (version 16+)](https://nodejs.org/en/download/)

## Available Scripts

In the project directory, you can run:

### `npm install`

Install each dependencies to launch this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Install API

You can clone the API in your folder with this git command  
`git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git .`  
_Read the documentation on readme to launch API with NPM_

# Project OpenClassrooms

Vous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications web. L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end.

![Logo de Remede Agency](https://user.oc-static.com/upload/2020/08/14/15974097192929_image1.png)

Après quelques jours dans l’entreprise, vous recevez le courriel suivant :

> **Objet**: Bienvenue !  
> **De**: Mila  
> **À**: Moi
>
> Bienvenue dans l'équipe !
>
> Je m'appelle Mila Lavigne et je suis ta nouvelle cheffe de projet. Nous sommes très heureux que tu rejoignes l'équipe ! J’ai une excellente nouvelle : le contrat dont nous t’avons parlé lors de l'entretien a été accepté et le client est prêt pour qu’on démarre.
>
> Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application. Nous avons obtenu un contrat en deux parties qui se décompose en plusieurs phases :
>
> -  **Phase 1 : Authentification des utilisateurs** - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
> -  **Phase 2 : Transactions** - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.
>
> À la fin du projet, tu présenteras les deux livrables à Avery Moreau, qui gère l’équipe technique d’Argent Bank.
>
> Nous attendons encore des informations, mais je veillerai à ce que tu sois inclus dans toutes les communications pour que tu sois à jour sur le projet.
>
> Au plaisir de travailler avec toi !
>
> **Mila**  
> **Cheffe de projet**

Quelques heures plus tard, vous recevez l’e-mail suivant :

![Logo de Argent Bank](https://user.oc-static.com/upload/2020/08/14/1597410191519_image2.png)

> **Objet**: Brief mission profil Argent Bank  
> **De**: Avery  
> **À**: Moi, Mila
>
> Bonjour Mila et l’équipe,
>
> Je suis Avery Moreau VP Engineering chez Argent Bank. Nous sommes ravis de vous avoir avec nous pour créer notre application web React pour le nouveau système d'authentification des utilisateurs. Nous avons des délais très serrés et nous aurons besoin d’aide !
>
> Voici un aperçu de ce dont nous avons besoin pour la **phase 1 : Authentification des utilisateurs**.
>
> -  Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le [HTML statique et le CSS](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs) pour la page d'accueil, la page de connexion et la page de profil.
> -  Utiliser Redux pour gérer le state de l'ensemble de l'application.
> -  Ce que doit faire l’application (voir les détails pour chacune sur [nos modèles de GitHub Issues](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)) :
>    -  L'utilisateur peut visiter la page d'accueil
>    -  L'utilisateur peut se connecter au système
>    -  L'utilisateur peut se déconnecter du système
>    -  L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
>    -  L'utilisateur peut modifier le profil et conserver les données dans la base de données.
>
> Vous pouvez commencer par forker [notre repo existant](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) et suivre l’avancement du travail grâce aux modèles d’Issues GitHub que nous y avons incluses.
>
> Nos ingénieurs back-end ont déjà créé toutes les API dont vous avez besoin. Vous trouverez toute la documentation Swagger à l'intérieur du repo.
>
> Pour la **phase 2 : Transactions**, nous sommes encore en phase de conception. De notre côté, nous mettons au point une fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :
>
> -  de visualiser toutes leurs transactions pour le mois en cours ;
> -  de visualiser les détails d'une transaction dans une autre vue ;
> -  d'ajouter, de modifier ou de supprimer des informations sur une transaction.
> -  Puisque vous gérez déjà l'application web pour la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les API devraient être modélisées du côté back end. Nous avons besoin que vous nous fournissiez un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger.
>
> Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :
>
> -  La méthode HTTP (ex. : GET, POST, etc.)
> -  La route (ex. : /store/inventory)
> -  La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
> -  Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
> -  Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).
>    Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document est exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans [l'outil d'édition de Swagger](https://editor.swagger.io/).
>
> Nous ferons une revue de code et discuterons ensemble de la proposition d'API une fois que tout sera terminé.
>
> Au plaisir de travailler avec vous !
>
> **Avery Moreau**

> ℹ️ Vous remarquez que l'interface est en anglais. Même si vous n'êtes pas très à l'aise dans cette langue, vous vous dites que c'est l'occasion de pratiquer un peu ! C'est toujours bien pour un développeur de lire l'anglais, car la documentation professionnelle se fait souvent dans cette langue. Et Google Traduction est votre ami

Toutes ces informations en main, vous vous mettez au travail dès que possible !
