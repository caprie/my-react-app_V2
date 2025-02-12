import React from 'react';                                          // Importe biblio React
import ReactDOM from 'react-dom/client';                            // Importe biblio ReactDOM
import App from './App';  


const root = ReactDOM.createRoot(document.getElementById('root'));  // Crée racine ReactDOM
root.render(                                                        // Affiche component App dans racine
  <React.StrictMode>                                                
    <App />                                                         
  </React.StrictMode>                                               /* Ferme StrictMode */
);
