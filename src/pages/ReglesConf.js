  import logo from '../logo.svg';
  import '../App.css';
  import Navbar from '../Navbar/Navbar';
  import React, { useState, useEffect, Component } from 'react';
  import { Container } from '@mui/system';
  import axios from 'axios';


  function ReglesConf() {


      return (
        <div className="App">
          <Navbar />
          <html lang="fr">
  <head>

  </head>
  <body>
  <div className="container" style={{ overflow: 'auto', maxHeight: '80vh' }}>
      <h1>CGU Arosaje</h1>
      <h2>Hébergeur</h2>
      <p>Le site n'est pas encore hébergé.</p>
      <h2>Directeur de la publication</h2>
      <p>Toute l’équipe d’Arosaje.</p>
      <h2>Protection des données</h2>
      <p>Conformément au Règlement général sur la protection des données (RGPD), les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et de portabilité de leurs données. Les utilisateurs peuvent également s'opposer à leur traitement ou demander une limitation de leur traitement en contactant le propriétaire du site à l'adresse e-mail mentionnée ci-dessus.</p>
      <h2>Cookies</h2>
      <p>Nous n’utilisons pas de cookies sur notre site.</p>
      <h2>Propriété intellectuelle</h2>
      <p>Tous les contenus du site, y compris les textes, images, logos, marques, sont la propriété du propriétaire du site et sont protégés par les lois sur la propriété intellectuelle. Toute utilisation, reproduction, ou représentation, même partielle, est interdite sans autorisation écrite préalable du propriétaire.</p>
      <h2>Responsabilité</h2>
      <p>Le propriétaire du site ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.</p>
      <h2>Droit applicable</h2>
      <p>Tout litige relatif au site sera régi par le droit français.</p>
      <p class="text-right">Arosaje 2023</p>
    </div>
  </body>
</html>

        </div>
      );
  }
  

export default ReglesConf;