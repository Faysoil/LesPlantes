import React, {useState, useEffect} from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
        <ul className='liste'>
            <li className='item'><a href="./">Accueil</a></li>
            <li className='item'><a href="./BlogPlantes">Plantes</a></li>
            <li className='item'><a href="./Messagerie">Message</a></li>
            <li className='item'><a href="./Carte">Carte</a></li>
            <li className='item'><a href="./Profil">Profil</a></li>
            <li className='item'>
  <a href="./Creer" style={{border: "2px solid white", borderRadius: "5px", padding: "10px", color: "white"}}>
    Poster un article
  </a>
</li>
        </ul>
    </nav>
  )
}
