<p align="center">
<img src= "https://user-images.githubusercontent.com/90606431/151769677-b99dbf89-68f6-46b6-9f01-ace009ae7202.jpg" />
</p>


## Sixième projet du parcours de développeur web chez OpenClassrooms. ##

L'objectif est la création d'une API sécurisée pour une application d'avis gastronomique dénommée "Piiquante" .

Ce site permet aux utilisateurs de télécharger leurs sauces piquantes préférées, et de "liker" ou de "disliker" les sauces que d'autres partagent.

<p align="center">
<img src= "https://user-images.githubusercontent.com/90606431/151660272-38f292d3-1316-4684-858c-c8267d830ada.jpg" />
</p>


### Compétences évaluées : ###

- Implémenter un modèle logique de données conformément à la règlementation.

- Mettre en oeuvre des opérations CRUD de manière sécurisée.

- Stocker des données de manière sécurisée.

### Technologie utilisée : ###

Ce projet utilise NodeJS et MongoDB a été choisi pour la base de données. 
Nous utilisons node.js pour construire le backend et, ainsi ajouter les modules nécéssaires .


## Frontend : ##

Le Frontend (développé à l'aide d'Angular) est fourni dans le projet (repo "ici")

## Back-end : ##

Les principaux modules de node.js utilisés dans ce projet :

- Express() : Nous utilisons express() pour la configuration du router. Express est un module de node.js et un framework JS. Express permet d'appliquer le CRUD à notre application.

- Mongoose : facilite la communication avec une base de donnée mongoDB ; mongoose est conçu pour node.js dont il est un module. Créer un schéma, appliquer le CRUD avec notre base de donnée, tout est possible avec Mongoose. Utilisation de dotenv pour securiser l'acces a mongoDB.

- Multer : récupère et stocke sur le serveur les fichiers envoyés par les utilisateurs. Ici, il est configuré de manière à stocker dans le dossier images/ les images de sauces proposées par chaque utilisateur.
modules de sécurité sur node.js

- Dotenv : Dotenv permet de travailler avec des variables d'environnement et de sécuriser les mots de passe d'un backend node.js.

- Helmet : Helmet permet a l'application de respecter les recommandations OWASP.

- JWT (JSON Web Tokens) : JWT est un module node.js qui permet de crypter les tokens d'authentification envoyés au client pour authentifier leur session, selon une clé définie par le développeur. Cette clé est généralement stockée dans le fichier .env.

- bcrypt : permet de faire un "hash" du mot de passe du client, de maniere a ce que cette chaine de caractère ne soit pas stockées coté serveur (mais seulement ce hash). Ainsi lorsque l'utilisateur se connecte avec son mot de passe, ce mot de passe est de nouveau haché et comparé au hash du serveur. Si les deux hash viennent du même mot de passe, les hash se reconnaitront.

- Mongoose-unique-validator :

- Express-rate-limit :

- Body-parser :

- Cors :

## Back-end : Information (securité) ##

Les variables d'environnement contenant l'identifiant, le mot de passe, le host et le nom de la base de données ainsi que la clé pour l'encodage sont contenues dans un fichier nommé ".env" à la racine du back-end. 
Ce fichier sera fourni avec les livrables mais pas sur ce repository.



<p align="center">
<img src= "https://user-images.githubusercontent.com/90606431/151660272-38f292d3-1316-4684-858c-c8267d830ada.jpg" />
</p>

<br>

Clone the frontend OpenClassrooms Github Projet P6.

Here are the dependancies you need to install:
- NodeJS 12.14 or 14.0.
- Angular CLI 7.0.2.
- node-sass : make sure to use the corresponding version to NodeJS. 
For Node 14.0 for instance, you need node-sass in version 4.14+.On Windows, these installations require to use PowerShell in administrator mode.

- Then, clone this repo, run npm install, and run npm install --save-dev run-script-os.
- Run npm start. This should both run the local server and launch your browser.
- If your browser fails to launch, or shows a 404 error, navigate your browser to localhost:8080.
- The app should reload automatically when you make a change to a file.
- Use Ctrl+C in the terminal to stop the local server.

 Dependencies backend: bcrypt/ dotenv/ Express/ Express-rate-limit/ helmet/ jsonwebtoken/ mongoose/ mongoose-unique-validator/ multer/ nodemon.

<p align="center">
<img src= "https://user-images.githubusercontent.com/90606431/151660985-c0a30670-7d3b-4b86-89fe-566e96a15e79.jpg" />
</p>
