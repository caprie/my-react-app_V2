import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Logement from './pages/logement/Logement'
import NotFound from './pages/not_found/NotFound'
import './App.scss'

function App() {
  
  
   

  return (
    <div className="App">
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />          
        <Route path="/about" element={<About />} />    
        <Route path="/logement/:id" element={<Logement />} />  
        <Route path="*" element={<NotFound />} />      
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;