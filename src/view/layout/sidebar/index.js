import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CategoryList from '../../containers/category-list';
import AccentButton from '../../components/accent-button';

import './main.css';

var routeDictionary = {
  goods: 'предмет',
  people: 'человека',
  places: 'место'
};

var Sidebar = (props) => {
  var route = props.match.params.route;
  var whatToAdd = routeDictionary[route];

  return (
    <aside className="sidebar">
      <AccentButton className="sidebar__accent-button">
        Добавить { whatToAdd }
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
