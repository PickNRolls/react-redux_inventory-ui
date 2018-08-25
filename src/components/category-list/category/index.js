import React from 'react';
import { Link } from 'react-router-dom';

import './main.css';

var Category = (props) => {
  return (
    <li className="category-list__item">
      <Link className="category-list__link" to={props.data.route}>
        <object
          type="image/svg+xml"
          className="category-list__image"
          data={props.data.img}
          alt={props.data.title}
        >Your browser doesn't support object tag</object>
        { props.data.title }
      </Link>
    </li>
  );
}

export default Category;
