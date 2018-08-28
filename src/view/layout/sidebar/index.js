import React from 'react';
import { Route } from 'react-router-dom';

// Components
import AccentButton from '../../components/accent-button';
import CategoryList from '../../containers/category-list';
import PeopleList from '../../containers/people-list';

import './main.css';

const routeDictionary = {
  goods: 'предмет',
  people: 'человека',
  places: 'место'
};

var Sidebar = props => {
  var route = props.match.params.route;
  var whatToAdd = routeDictionary[route];

  return (
    <aside className="sidebar">
      <AccentButton className="sidebar__accent-button">
        Добавить { whatToAdd }
      </AccentButton>

      <Route path="/goods/:category?" render={props =>
        <CategoryList
          {...props}
          className="sidebar__category-list"
        />
      } />

      <Route path="/people" render={props =>
        <PeopleList
          {...props}
          className="sidebar__people-list"
        />
      } />

      <Route path="/places" />
    </aside>
  );
}

export default Sidebar;
