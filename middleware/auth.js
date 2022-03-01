// Jsonwebtoken : pour créer des token aléatoires et uniques pour la connexion.
// Dotenv : pour protéger les informations de connexion vers la BDD.
// Puis, j'exporte le module de token :
// On récupérer le token dans le header "autorisation", le split et on récupére le deuxième élément du tableau renvoyé.
// On décode le token en le vérifiant et on extrait le userId grace au token
// Si on a un userId dans le corps de la requête et qu'il est différent du userId on renvoie "erreur" 401, problème d'authentification.
// Si tout va bien, suivant.

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, `${process.env.RND_TKN}`)
        const userId = decodedToken.userId
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable !'
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non-authentifiée !' })
    }
}