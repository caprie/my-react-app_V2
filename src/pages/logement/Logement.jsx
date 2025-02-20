
import React from "react";
import apartmentsData from "../../Data/data.json";
import { useParams } from "react-router-dom";
import SlideShow from '../../components/SlideShow/SlideShow';
import "./logement.scss";


const Logement = () => {
  const { id } = useParams();  // Récupère l'ID de l'URL
  console.log("ID Logement:", id);

  // Trouver l'objet logement correspondant à l'ID
  const logement = apartmentsData.find(item => item.id === id);

  // Si aucun logement n'est trouvé, on affiche un message d'erreur
  if (!logement) {
    return (
      <div className="logement">
        <h1>Logement non trouvé</h1>
      </div>
    );
  }

  // Sinon, on affiche les détails du logement
  return (
    <div className="logement">
      <SlideShow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      
      <p>{logement.description}</p>
      
    </div>
  );
};



export default Logement; 

