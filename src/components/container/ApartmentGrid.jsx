import React from 'react'
import './apartmentGrid.scss'


// liste des apparts avec images

const ApartmentGrid = ({ apartments = [] }) => { // Default to an empty array
  

  return (
    <div className="apartment-grid">
      {apartments.map(apartment => ( 
        <div key={apartment.id} className="apartment-card"> {/* affiche les images et les titres */}
          <img
             src={apartment.cover} 
             alt={apartment.title} 
            className="apartment-image" // classe pour les images
          />
          <div className="apartment-title">{apartment.title}</div> {/* classe pour les titres*/}
        </div>
      ))}
    </div>
  );
};

export default ApartmentGrid
