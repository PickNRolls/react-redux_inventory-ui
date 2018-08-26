import React from 'react';

// Components

import AccentButton from '../../components/accent-button';
import LayoutControl from '../../containers/layout-control';
import SearchInput from '../../components/search-input';
import SelectSort from '../../components/select-sort';

import './main.css';

var SortPanel = (props) => {
  return (
    <section className="sort-panel">
      <div className="container">
        <AccentButton className="sort-panel__accent-button">
          Добавить предмет
        </AccentButton>
        <LayoutControl />
        <SearchInput className="sort-panel__search-input" />
        <SelectSort className="sort-panel__select-sort" />
      </div>
    </section>
  );
}

export default SortPanel;
