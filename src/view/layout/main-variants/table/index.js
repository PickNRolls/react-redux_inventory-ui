import React from 'react';

// Components
import Header from './header';
import Rows from './rows';

import './main.css';
import data from '../data';

var TableLayout = (props) => {
  return (
    <div className="table-layout">
      <Header />
      <Rows payload={data} />
    </div>
  );
}

export default TableLayout;
