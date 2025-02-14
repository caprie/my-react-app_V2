import React from 'react'                           // Import React library
//import logo from '../../../assets/logo_index.png' // import logo
import "./Footer.scss"                             // Import CSS file


function Footer() {
    return (
        <footer className="footer">
            <img src="/LOGO_index.png" alt="Logo" className="footer-logo" />

            <p className="footer-text">© 2023 Kasa. All rights reserved.</p>
        </footer>
    );
};

export default Footer;