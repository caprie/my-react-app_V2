
  import React from 'react'                           // Import React library
  import { NavLink } from 'react-router-dom';
  import "./Header.scss"
  import '../../components/Nav/Nav';
  import "./Header.scss";
 
  const Header = () => {
    return (
      <header className="header">
        <div className="header-container">
          <img src="/LOGO_index.png" alt="Logo" className="header-logo" />
          <nav className="header-nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  À propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

  export default Header;