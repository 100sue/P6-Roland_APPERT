// Limiteur de restriction de tentative de connexion utilisateur :
// Après 3 tentatives infructueuses, le compte est bloqué pendant cinq minutes et affichage d'un message correspondant.

const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Trop de tentatives de connexion. Compte bloqué pour 5 minutes"
})

module.exports = { limiter }