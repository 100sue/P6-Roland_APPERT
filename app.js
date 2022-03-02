// Import d'express afin de créer des applis web avec Node.
// Import de body-parser afin de pouvoir "parser" le body de la requête.
// Import de helmet afin de sécuriser les en-tête http de l'application express.
// Import de Cors
// Import mongoose afin de faciliter les interactions avec la base de données de mongoDB.
// Import de path afin de pouvoir travailler avec les chemins des fichiers(module node qui sert à cacher notre addresse Mongo, marche avec dotenv).
// Import de dotenv afin de protéger les informations de connexion vers la base de données.
// Appel au module Express avec sa fonction.

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors())


// Routes vers l'utilisateur et les sauces :

const sauceRoutes = require("./routes/sauce.js");
const userRoutes = require("./routes/user");


// Connection à la base de données (MongoDB Atlas Database) :

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Avant la route d'API, on ajoute la fonction (middleware) des headers permettant aux deux ports, front et end, de communiquer entre eux.
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


// On récupère le body en front sur l'objet request et on "parse" le corps de la requête en objet json :

app.use(bodyParser.json());

// Configuration des routes d'API :

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

app.use(helmet());


// Exportation du module afin de pouvoir le réutiliser :

module.exports = app;