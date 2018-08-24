import React from 'react';
import { Link } from 'react-router-dom';

import './main.css';

var TopNav = () => {
  return (
    <ul className="top-nav">
      <li className="top-nav__item">
        <Link to="/items" className="top-nav__link">
          Предметы
        </Link>
      </li>
      <li className="top-nav__item">
        <Link to="/places" className="top-nav__link">
          Места
        </Link>
      </li>
      <li className="top-nav__item">
        <Link to="/people" className="top-nav__link">
          Люди
        </Link>
      </li>
    </ul>
  );
}

export default TopNav;
