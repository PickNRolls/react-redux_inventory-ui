import React from 'react';
import { Route } from 'react-router-dom';

// Components

import CategoryList from '../../containers/category-list';

import './main.css';

var Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <Route path="/goods/:category?" component={CategoryList} />
      <Route path="/people" />
      <Route path="/places" />
    </aside>
  );
}

export default Sidebar;
