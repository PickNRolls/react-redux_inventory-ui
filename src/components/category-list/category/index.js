import React from 'react';

import './main.css';

var Category = (props) => {
  return (
    <li className="category-list__item">
      <img src={props.data.img} alt="" />
      { props.data.title }
    </li>
  );
}

export default Category;
