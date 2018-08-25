import React from 'react';

import './main.css';

var SelectSort = (props) => {
  var className = 'select-sort';
  if (props.className) className += ` ${props.className}`;

  return (
    <div className={className}>
      <div className="select-sort__view">
        <span>Сортировать:</span>
        &nbsp;
        <span className="select-sort__sort-by">по возрастанию цены</span>
        <img
          className="select-sort__arrow"
          src="img/arrow.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SelectSort;
