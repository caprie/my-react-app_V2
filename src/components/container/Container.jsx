import React from 'react';
import './container.scss';
import ApartmentGrid from './ApartmentGrid';

const Container = () => {  // container avec les apparts
  return (
    <div className="container">
      <ApartmentGrid />   {/* affiche les apparts */}
    </div>
  );
};

export default Container;