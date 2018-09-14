import React from 'react';

// Components
import Header from './header';
import Rows from './rows';

import './main.css';

var TableLayout = props => {
  return (
    <div className="table-layout">
      <Header />
      <Rows
        goods={props.goods}
        onGoodsClick={props.onGoodsClick}
      />
    </div>
  );
}

export default TableLayout;
