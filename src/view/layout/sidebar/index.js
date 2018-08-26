import React from 'react';

// Components

import CategoryList from '../../containers/category-list';

import './main.css';

var Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <CategoryList activeCategory={props.activeCategory} />
    </aside>
  );
}

export default Sidebar;
