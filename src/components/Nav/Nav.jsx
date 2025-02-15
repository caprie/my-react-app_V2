import React from 'react'
import { Link } from 'react-router-dom'; 
import './nav.scss'        

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/about" className="nav-link">À propos</Link> {/*marche pas */}
    </nav>
  )
};

export default Nav