// Multer est un package qui nous permet de gérer les fichiers entrants dans les requêtes HTTP.
// Ici, ce sera les images téléchargées par les users .
// On va traduire les types de fichier pour générer des extensions possibles.
// On enregistre les images téléchargées par le user dans le disc
// la config de multer nécessite deux arguments : destination + filename prenant prenant 3 params chacun.
// Le callback renvoie vers la destination d'enregistrement qui est le dossier images.
// Le nom de fichier a considérer :
// on va créer le nom du fichier (prend le nom d'origine, le split), et on remplace les espaces par des undescores.
// on génère l'extension du fichieret on renvoie en callback avec le nom du fichier final.

const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split('.')[0].split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + '_' + Date.now() + '.' + extension);
    }
})

// Exportation du  multer en appelant le module storage.
// .single signifie que c'est un fichier unique et non un groupe.
// "image" pour dire à multer qu'il s'agit d'un fichier image uniquement.

module.exports = multer({ storage }).single('image');