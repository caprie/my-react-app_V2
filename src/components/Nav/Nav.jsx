import React from "react"
import { NavLink } from "react-router-dom"
import "./nav.scss"

const Nav = () => {

  return (
  <nav className="header-nav">
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          À propos
        </NavLink>
      </li>
      {/* Ajoute d'autres liens si besoin */}
    </ul>
  </nav>);
  
};

export default Nav
