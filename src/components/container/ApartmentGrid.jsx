import React from 'react';
import './apartmentGrid.scss';

// simulation liste d'apparts
const apartments = [
  { id: 1, title: 'Appartement Cozy', image: '/img1.jpg' },
  { id: 2, title: 'Loft Moderne', image: '/img2.jpg' },
  { id: 3, title: 'Studio Charmant', image: '/img3.jpg' },
  { id: 4, title: 'Villa Bord de Mer', image: '/img4.jpg' },
  { id: 5, title: 'Appartement Luxe', image: '/img5.jpg' },
  { id: 6, title: 'Maison de Campagne', image: '/img6.jpg' }
];

const ApartmentGrid = () => {
  return (
    <div className="apartment-grid">
      {apartments.map(apartment => (
        <div key={apartment.id} className="apartment-card">
          <img
            src={apartment.image}
            alt={apartment.title}
            className="apartment-image"
          />
          <h3>{apartment.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ApartmentGrid;
