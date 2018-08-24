import React from 'react';
import { Link } from 'react-router-dom';

import './main.css';

// Components

import TopNav from '../../components/top-nav';
import ProfileDropdown from '../../components/profile-dropdown';

var AppHeader = () => {
  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="app-header__logo">
          <img src="img/logo.png" alt="Logo"/>
          <img src="img/Inventory.png" alt="Inventory"/>
        </Link>

        <TopNav />

        <ProfileDropdown />
      </div>
    </header>
  );
}

export default AppHeader;
