import React, { StrictMode } from 'react'                          // Importe biblio React et StrictMode pour verifier et avertissements 
import ReactDOM from 'react-dom/client'                           
import { BrowserRouter } from 'react-router-dom';
import App from './App'  
import './main.scss' 



// simulation d'une liste d'apparts
const apartments = [
  { id: 1, title: 'Appartement Cozy', image: '/img1.jpg' },
  { id: 2, title: 'Loft Moderne', image: '/img2.jpg' },
  { id: 3, title: 'Studio Charmant', image: '/img3.jpg' },
  { id: 4, title: 'Villa Bord de Mer', image: '/img4.jpg' }
];

const Main = () => {
  return (
    <main className="main-container">
      <div className="grid">
        {apartments.map(apartment => (
          <ApartmentCard key={apartment.id} title={apartment.title} image={apartment.image} />
        ))}
      </div>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crée racine ReactDOM
root.render(                                                        // Affiche component App dans racine
  <BrowserRouter>
    <App />
  </BrowserRouter>                                              
);

export default Main






