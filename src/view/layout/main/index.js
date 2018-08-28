import React from 'react';

// Different layouts
import TileLayout from '../main-variants/tile';
import TableLayout from '../main-variants/table';
import ListLayout from '../main-variants/list';

import './main.css';
import '../main-variants/common.css';

var Main = (props) => {
  switch (props.activeView) {
    case 1:
      return <TableLayout payload={props.goods} />;
    case 2:
      return <ListLayout payload={props.goods} />;
    default:
      return <TileLayout payload={props.goods} />;
  }
}

export default Main;
