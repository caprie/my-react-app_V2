import React from 'react'
import './banner.scss'



function Banner ({ image, showText = true }) {
return (
    <div className='banner'>
        <img src={image} alt="Bannière Kasa" className="banner-image" />
        {showText && (
            <div className='banner_overlay'> {/* recouvrir l'image avec un overlay */}
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        )}
    </div>
    
);
};

export default Banner