import React from 'react';

// Different layouts
import TileLayout from '../main-variants/tile';
import TableLayout from '../main-variants/table';

import './main.css';
import '../main-variants/common.css';

var layoutsArr = [
  <TileLayout />,
  <TableLayout />
];

var Main = (props) => {
  var currentLayout = layoutsArr[props.activeView];
  return (
    <main className="main">
      { currentLayout }
    </main>
  );
}

export default Main;
