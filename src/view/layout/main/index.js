import React from 'react';

// Different layouts
import TileLayout from '../main-variants/tile';
import TableLayout from '../main-variants/table';
import ListLayout from '../../containers/main-layout-list';

// Components
import Pagination from '../../components/pagination';

import './main.css';
import '../main-variants/common.css';

var Main = props => {
  var selectedView = null;

  switch (props.activeView) {
    case 1:
      selectedView = (
        <TableLayout
          goods={props.goods}
          viewedId={props.viewedId}
          onGoodsClick={props.viewGoods}
        />
      );
      break;

    case 2:
      selectedView = (
        <ListLayout
          goods={props.goods}
          viewedId={props.viewedId}
          onGoodsClick={props.viewGoods}
        />
      );
      break;

    default:
      selectedView = (
        <TileLayout
          goods={props.goods}
          viewedId={props.viewedId}
          onGoodsClick={props.viewGoods}
        />
      );
      break;
  }

  return (
    <div className="main-wrap">
      <main className="main">
        {selectedView}
      </main>
      <Pagination className="main__pagination" pagesAmount="3" />
    </div>
  );
}

export default Main;
