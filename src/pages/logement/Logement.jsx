import React from "react"
import apartmentsData from "../../Data/data.json"
import { useParams, Navigate } from "react-router-dom"
import SlideShow from "../../components/SlideShow/SlideShow"
import Filters from "../../components/Filters/Filters"
import Collapse from "../../components/Collapse/Collapse"
import "./logement.scss"

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  console.log("ID Logement:", id);

  // Trouver l'objet logement correspondant à l'ID
  const logement = apartmentsData.find((item) => item.id === id);

  // Si aucun logement n'est trouvé, on affiche un message d'erreur
  if (!logement) {
    return <Navigate to="/404" />;
  }

  // Convertir la note en nombre
  const rating = parseInt(logement.rating, 10);

  // Préparer le contenu des équipements sous forme de liste
  const equipmentsContent = (
    <ul>
      {logement.equipments.map((equip, index) => (
        <li key={index}>{equip}</li>
      ))}
    </ul>
  );

  // Sinon, on affiche les détails du logement
  return (
    <div className="logement">
      <SlideShow pictures={logement.pictures} />
      <div className="logement-header">
        <div className="logement-details">
          <h1>{logement.title}</h1>
          {/* Affichage de la localisation */}
          <p className="logement-location">{logement.location}</p>

          <Filters tags={logement.tags} />
        </div>

        <div className="host-profile">
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-picture"
          />
          <p className="host-name">{logement.host.name}</p>
          {/* Affichage dynamique des étoiles */}
          <div className="host-rating">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className="fa-solid fa-star"
                style={{ color: i < rating ? "#FF6060" : "#E3E3E3" }}
              ></i>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Equipements">{equipmentsContent}</Collapse>
      </div>
    </div>
  );
};

export default Logement
