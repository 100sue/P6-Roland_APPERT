// Importation des npm nécessaires afin de crypter les informations (pour créer des token introuvables et aléatoires).
// C'est-à-dire : sécuriser la connexion au compte.
// Puis j'importe le "model" de création utilisateur.

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


// Signup : hashage 10 fois du password avec bcrypt.
// Puis, créeation d'un nouvel utilisateur.
// En récupèrant le corps de la requête (= email), et "hash" du password quand l'utilisateur le crée.
// Puis, sauvegarde de l'utilisateur dans la BDD

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            })
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}


// Login : on vérifie si l'email utilisateur existe dans la BDD.
// S'il n'existe pas = erreur 401.
// Puis, on compare les entrées et les données :
// si c'est différent = erreur 401.
// si c'est ok (statut 200), on envoie l'objet suivant : contenant les données qu'on veut encoder dans ce token.
// avec une clé secrète qui est valide pendant 24h.

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            `${process.env.RND_TKN}`,
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}