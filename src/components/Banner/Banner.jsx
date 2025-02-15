import React from 'react'
import './banner.scss'



function Banner() {
return (
    <div className='banner'>
        <img src="/banner_index.png" alt="Bannière Kasa" className="banner-image" />
        <div className='banner_overlay'> {/* recouvrir l'image avec un overlay */}
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </div>
    
);
};

export default Banner