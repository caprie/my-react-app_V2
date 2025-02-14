import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Container from './components/container/Container'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container />  {/* Contient la grille d'appartements avec le fond coloré */}
      <Footer />
    </div>
  );
}

export default App;