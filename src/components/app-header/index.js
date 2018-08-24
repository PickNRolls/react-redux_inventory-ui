import React from 'react';
import { Link } from 'react-router-dom';

import './main.css';

// Components

import TopNav from '../top-nav';

var AppHeader = () => {
  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="app-header__logo">
          <img src="img/logo.png" alt="Logo"/>
          <img src="img/Inventory.png" alt="Inventory"/>
        </Link>

        <TopNav />
      </div>
    </header>
  );
}

export default AppHeader;
