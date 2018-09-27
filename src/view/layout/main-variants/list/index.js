import React from 'react';

// Components
import Sidebar from './sidebar';
import Body from './body';
import Loader from '../../../components/data-loader';

import './main.css';

var List = props => {
  if (props.loading)
  return (
    <div className="list-layout list-layout--loading clearfix">
      <Loader />
    </div>
  );

  return (
    <div className="list-layout clearfix">
      <Sidebar
        goods={props.goods}
        viewedId={props.viewedId}
        onGoodsClick={props.onGoodsClick}
        currentPage={props.currentPage}
      />
      <Body
        goods={props.goods}
        viewedGoods={props.viewedGoods}
        breadcrumb={props.breadcrumb}
      />
    </div>
  );
};

export default List;
