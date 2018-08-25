import React from 'react';

// Components

import CategoryList from '../../components/category-list';

import './main.css';

var Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <CategoryList categories={props.categories} />
    </aside>
  );
}

export default Sidebar;
