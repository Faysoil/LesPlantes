import React, {useState, useEffect} from 'react'
import "./Navbar.css"


function Footer() {
    return (
      <footer>
        <nav>
        <ul className='liste'>
            <li><a href="/confidentialite">Confidentialité</a></li>
            <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
            <li><a href="/MentionLeg">Mentions légales</a></li>
          </ul>
        </nav>


        <p>© 2023 Los Plantas. Tous droits réservés.</p>
      </footer>
    );
  }
  
  export default Footer;