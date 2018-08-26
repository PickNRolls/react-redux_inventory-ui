import React from 'react';
import { Link, Route } from 'react-router-dom';

import './main.css';

// Components

import TopNav from '../../components/top-nav';
import ProfileDropdown from '../../components/profile-dropdown';

var AppHeader = () => {
  return (
    <header className="app-header">
      <div className="container">
        <Link to="/goods" className="app-header__logo">
          <img src="img/logo.png" alt="Logo"/>
          <img src="img/Inventory.png" alt="Inventory"/>
        </Link>

        <Route path="/:page?" render={(props) => {
          var page = props.match.params.page;
          return <TopNav className="app-header__top-nav" page={page} />;
        }} />

        <ProfileDropdown className="app-header__profile" />
      </div>
    </header>
  );
}

export default AppHeader;
