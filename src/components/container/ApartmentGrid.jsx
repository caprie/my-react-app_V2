import React from "react"
import { Link } from "react-router-dom"
import "./apartmentGrid.scss"
import PropTypes from "prop-types"



// liste des apparts avec images

const ApartmentGrid = ({ apartments = [] }) => {
  return (
    <div className="apartment-grid">
      {apartments.map((apartment) => (
        <Link
          key={apartment.id}
          to={`/logement/${apartment.id}`}
          className="apartment-card-link"
        >
          <div className="apartment-card">
            <img
              src={apartment.cover}
              alt={apartment.title}
              className="apartment-image"
            />
            <div className="apartment-title">{apartment.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ApartmentGrid
