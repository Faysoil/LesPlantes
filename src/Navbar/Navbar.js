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
        </ul>
    </nav>
  )
}
