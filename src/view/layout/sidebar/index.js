import React from 'react';
import { Route } from 'react-router-dom';

// Components
import AccentButton from '../../components/accent-button';
import CategoryList from '../../containers/category-list';
import PeopleList from '../../containers/people-list';

// Redux
import { connect } from 'react-redux';
import * as UIActions from '../../redux/actions';

import './main.css';

const routeDictionary = {
  goods: {
    str: 'предмет',
    popupIndex: 0
  },
  people: {
    str: 'человека',
    popupIndex: 2
  },
  places: {
    str: 'место',
    popupIndex: 1
  }
};

var Sidebar = props => {
  var route = props.route;
  var whatToAdd;
  if (!route) whatToAdd = routeDictionary.goods.str;
  else whatToAdd = routeDictionary[route].str;

  props.closePopup();
  props.switchPopup(routeDictionary[route].popupIndex);

  return (
    <aside className="sidebar">
      <AccentButton
        className="sidebar__accent-button"
        onClick={props.openPopup}
        >
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
};

var mapStateToProps = (state, ownProps) => {
  return {
    route: ownProps.match.params.route
  };
};

var mapDispatchToProps = dispatch => {
  return {
    openPopup() {
      dispatch(UIActions.togglePopup(true));
    },
    closePopup() {
      dispatch(UIActions.togglePopup(false));
    },
    switchPopup(index) {
      dispatch(UIActions.switchPopup(index));
    }
  }
};

var SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
