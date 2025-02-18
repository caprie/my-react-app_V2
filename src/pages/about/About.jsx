import React from "react";
import "./about.scss";
import Banner from "../../components/Banner/Banner"


const About = () => {
    return ( 
        <div className="about">
      {/* Ici, on passe une image via URL directement depuis public */}
      <Banner image="/banner_about.png" showText={false} />

      {/* Contenu de la page À propos 
        <div className="about-content">
            <h2>Fiabilité</h2>
            <p>
            Tous les logements disponibles sont visités et sélectionnés par nos
            soins. Une attention toute particulière est portée à la qualité des
            logements proposés.
            </p>
            <h2>Respect</h2>
            <p>
            La qualité de service est au cœur de nos préoccupations. Vous pouvez
            nous joindre à tout moment et nous nous engageons à trouver une solution  
            à vos problèmes dans les plus brefs délais.
            </p>
            <h2>Service</h2>
            <p>
            Notre service client est à votre disposition pour répondre à toutes vos
            questions. N'hésitez pas à nous contacter si vous avez besoin de plus
            amples informations.
            </p>
        </div>
        */}
    </div>
    );
}

export default About;
