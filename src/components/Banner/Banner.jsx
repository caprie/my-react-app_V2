import React from 'react'
import './banner.scss'
//import Container from "../container/Container";


function Banner() {
return (
    <div className='banner'>
        <img src="/banner_index.png" alt="Bannière Kasa" className="banner-image" />
        
        <div className='banner_text'>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    </div>
    
)
}

export default Banner