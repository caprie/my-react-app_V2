
  import React from 'react'                           // Import React library
  //import logo from '../../../assets/logo_index.png' // import logo
  //import "./Footer.scss"                             // Import CSS file
  import "./Header.scss"
  
 
  const Header = () => {
    return (
      <header className="header">
        <div className="header-container">
          <img src="/LOGO_index.png" alt="Logo" className="header-logo" />
          <nav className="header-nav">
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
};



  export default Header;