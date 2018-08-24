import React from 'react';

import './main.css';

var SearchInput = (props) => {
  var className = 'search-input-wrap';
  if (props.className) className += ` ${props.className}`;

  return (
    <div className={className}>
      <img
        className="search-input-wrap__image"
        src="img/search-icon.png"
        alt="search"
      />
      <input
        type="text"
        className="search-input"
        placeholder="Введите название для поиска"
      />
    </div>
  );
}

export default SearchInput;
