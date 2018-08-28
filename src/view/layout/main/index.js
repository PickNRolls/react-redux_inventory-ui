import React from 'react';

// Different layouts
import TileLayout from '../main-variants/tile';
import TableLayout from '../main-variants/table';
import ListLayout from '../../containers/main-layout-list';

import './main.css';
import '../main-variants/common.css';

var Main = props => {
  switch (props.activeView) {
    case 1:
      return (
        <TableLayout
          goods={props.goods}
          viewedId={props.viewedId}
          onGoodsClick={props.viewGoods}
        />
      );

    case 2:
      return (
        <ListLayout
          goods={props.goods}
          viewedId={props.viewedId}
          onGoodsClick={props.viewGoods}
        />
      );

    default:
      return (
        <TileLayout
          goods={props.goods}
          viewedId={props.viewedId}
          onGoodsClick={props.viewGoods}
        />
      );
  }
}

export default Main;
