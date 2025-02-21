import React from 'react';
import './filters.scss';

const Filters = ({ tags }) => {
  return (
    <div className="filters">
      {tags.map((tag, index) => (
        <span key={index} className="filter">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Filters;
