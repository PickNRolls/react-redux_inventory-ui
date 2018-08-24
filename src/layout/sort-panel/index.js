import React from 'react';

// Components

import AccentButton from '../../components/accent-button';
import LayoutControl from '../../components/layout-control';
import SearchInput from '../../components/search-input';
import SelectSort from '../../components/select-sort';

var SortPanel = (props) => {
  return (
    <section className="sort-panel">
      <div className="container">
        <AccentButton />
        <LayoutControl />
        <SearchInput />
        <SelectSort />
      </div>
    </section>
  );
}

export default SortPanel;
