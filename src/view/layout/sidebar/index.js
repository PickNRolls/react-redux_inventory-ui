import React from 'react';

// Components

import CategoryList from '../../containers/category-list';

import './main.css';

var Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <CategoryList />
    </aside>
  );
}

export default Sidebar;
