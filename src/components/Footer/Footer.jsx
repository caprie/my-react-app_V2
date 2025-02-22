import React from 'react'                           
import "./Footer.scss"                             

function Footer() {
    return (
        <footer className="footer">
            <img src="/logo_footer.png" alt="Logo Kasa" className="footer-logo" />
            <p className="footer-text">© 2023 Kasa. All rights reserved.</p>
        </footer>
    );
};

export default Footer