import React from "react" // Import React library


import "./Header.scss"
import Nav from "../../components/Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/LOGO_index.png" alt="Logo" className="header-logo" />
        <Nav />
      </div>
    </header>
  );
};

export default Header