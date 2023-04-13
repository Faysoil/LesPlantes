//Importer les bibliothèques nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees', { useNewUrlParser: true, useUnifiedTopology: true });

//Définition du schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

//Configuration de l'application Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route pour la page de connexion
app.post('/Connexion', function(req, res) {
  //Récupération des données de connexion envoyées par l
   formulaire
  const email = req.body.email;
  const password = req.body.password;

  //Recherche de l'utilisateur dans la base de données
  User.findOne({ email: email, password: password }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur serveur');
    } else if (!user) {
      res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    } else {
      res.redirect('/page_apres_connexion');
    }
  });
});

//Démarrage du serveur
app.listen(3000, function() {
  console.log('Serveur démarré sur le port 3000');
});
