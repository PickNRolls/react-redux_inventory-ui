import React from 'react';

// Components

import LayoutControl from '../../containers/layout-control';
import SearchInput from '../../components/search-input';
import SelectSort from '../../components/select-sort';

import './main.css';

var SortPanel = (props) => {
  return (
    <section className="sort-panel">
      <LayoutControl />
      <SearchInput className="sort-panel__search-input" />
      <SelectSort className="sort-panel__select-sort" />
    </section>
  );
}

export default SortPanel;
