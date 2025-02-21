import React, { useState } from "react";
import "./slideShow.scss";

const SlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = pictures.length;

  // Si une seule image, ne pas afficher de contrôles
  if (totalSlides <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Slide 1" className="slideshow-image" />
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="slideshow-image"
      />
      {/* Conteneur pour les flèches */}
      <div className="arrow-container">
        <button className="arrow arrow-left" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="arrow arrow-right" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      {/* Conteneur pour la numérotation */}
      <div className="slide-number-container">
        <span className="slide-number">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default SlideShow;
