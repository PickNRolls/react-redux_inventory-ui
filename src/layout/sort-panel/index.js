import React from 'react';

// Components

import AccentButton from '../../components/accent-button';
import LayoutControl from '../../components/layout-control';
import SearchInput from '../../components/search-input';
import SelectSort from '../../components/select-sort';

import './main.css';

var SortPanel = (props) => {
  return (
    <section className="sort-panel">
      <div className="container">
        <AccentButton>
          Добавить предмет
        </AccentButton>
        <LayoutControl />
        <SearchInput />
        <SelectSort />
      </div>
    </section>
  );
}

export default SortPanel;
