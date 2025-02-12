import React from 'react'
import './nav.scss'         

function Nav() {
  return (
    
      <nav className='nav'>
        <div className='nav_logo'></div>
        <img src='logo.png' alt='logo' />
      <div className='accueil'>Accueil</div>
      <div className='apropos'>A Propos</div>
    </nav>
  )
};

export default Nav