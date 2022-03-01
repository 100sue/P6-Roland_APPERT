// Import d'express afin de créer des applis web avec Node.
// Appel au module Express avec sa fonction
// Import mongoose afin de faciliter les intéractions avec la bdd mongoDB.
// Import de dotenv afin de protéger les informations de connexion vers la BDD.
// Import de path afin de pouvoir travailler avec les chemins des fichiers.
// Import de helmet afin de sécuriser les en-tête http de l'application express.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();


// Pour les routes vers l'utilisateur et les sauces :

const sauceRoutes = require("./routes/sauce.js");
const userRoutes = require("./routes/user");


// Connection à la BDD (MongoDB Atlas Database) :

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Avant la route d'API, on ajoute la fonction (middleware) des headers permettant aux deux ports front et end de communiquer entre eux.
// "*" permet d'accéder a l'API depuis n'importe quelle origine.
// Et, autorisation d'utiliser certains headers sur l'objet requête.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Je récupère le body en front sur l'objet request et "parse" le corps de la requête en objet json :

app.use(bodyParser.json());


// Configuration des routes d'API :

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);


// Exportation du module afin de pouvoir le réutiliser :

module.exports = app;