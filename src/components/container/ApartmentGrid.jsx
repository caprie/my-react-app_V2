import React from 'react'
import './apartmentGrid.scss'
import balloon from '../../assets/balloon.jpg' 
import big_space from '../../assets/big_space.jpg'
import bubbles from '../../assets/bubbles.jpg'
import chalet_blanc from '../../assets/chalet_blanc.jpg'
import class_fire from '../../assets/class_fire.jpg'
import dot_best from '../../assets/dot_best.jpg'
import dots_and_dots from '../../assets/dots_and_dots.jpg'
import la_tete_dans_les_nuages from '../../assets/la_tete_dans_les_nuages.jpg'
import little_house from '../../assets/little_house.jpg'
import marocco from '../../assets/marocco.jpg'
import clouds from '../../assets/clouds.jpg'
import steampunk from '../../assets/steampunk.jpg'
import wood_fire from '../../assets/wood_fire.jpg'

// liste des apparts avec images
const apartments = [
  { id: 1, title: 'Appartement duplex Les Pieds dans l eau', image: balloon },
  { id: 2, title: 'Appartement y a de l espace', image: big_space },
  { id: 3, title: 'Appartement Mars Attack', image: bubbles },
  { id: 4, title: 'Suite Nuptiale', image: chalet_blanc },
  { id: 5, title: 'Appartement SPA', image: class_fire },
  { id: 6, title: 'Appartement dans les nuages', image: clouds },
  { id: 7, title: 'Maison du point', image: dot_best },
  { id: 8, title: 'Appartement Perds pas la boule', image: dots_and_dots },
  { id: 9, title: 'Maison la tête dans les nuages', image: la_tete_dans_les_nuages },
  { id: 10, title: 'Maison tout comme une grande', image: little_house },
  { id: 11, title: 'Maison inspiration', image: marocco },
  { id: 12, title: 'Maison steampunk', image: steampunk },
  { id: 13, title: 'Beau feu de bois', image: wood_fire }
];

const ApartmentGrid = () => {
  console.log(apartments); // Vérifie si les images sont bien chargées

  return (
    <div className="apartment-grid">
      {apartments.map(apartment => ( 

        <div key={apartment.id} className="apartment-card"> {/* affiche les images et les titres */}
          <img
             src={apartment.image ? apartment.image : "https://via.placeholder.com/150"} // affiche une image par défaut si l'image n'est pas chargée
            alt={apartment.title} // affiche le titre de l'appartement
            className="apartment-image" // classe pour les images
          />
          <div className="apartment-title">{apartment.title}</div> {/* classe pour les titres*/}
        </div>
      ))}
    </div>
  );
};

export default ApartmentGrid
