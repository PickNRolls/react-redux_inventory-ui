import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CategoryList from '../../containers/category-list';
import AccentButton from '../../components/accent-button';

import './main.css';

var Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <AccentButton className="sidebar__accent-button">
        Добавить предмет
      </AccentButton>
      <Route path="/goods/:category?" render={(props) => {
        return (
          <CategoryList
            {...props}
            className="sidebar__category-list"
          />
        );
      }} />
      <Route path="/people" />
      <Route path="/places" />
    </aside>
  );
}

export default Sidebar;
