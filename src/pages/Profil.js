import React from 'react';
import Navbar from '../Navbar/Navbar';
import './profil.css'; // fichier CSS pour la classe Profil

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: 'https://html.com/wp-content/uploads/flamingo.jpg',
      nom: 'Farhati Mohamed',
      adresse: '12 chemin des peupliers, 69200',
      email: 'email-test@gmail.com',
      typeDeCompte: 'Particulier',
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="maDiv">
        <h1 class="titreCarte"style={{ textAlign: "center", fontSize: "2.5rem", marginTop: "2rem", marginBottom: "4rem" }}>Votre profil</h1>
          <img
            src={this.state.photoUrl}
            className="monImage"
            alt="Description de l'image"
          />
          <div className="infoProfil">
            <p className="nom">{this.state.nom}</p>
            <p className="adresse">{this.state.adresse}</p>
            <p className="email">{this.state.email}</p>
            <p className="typeCompte">{this.state.typeDeCompte}</p>
            <button >
            <a href="../" class="">Se dÃ©connecter</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profil;