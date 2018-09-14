import React from 'react';

// Components
import Sidebar from './sidebar';
import Body from './body';

import './main.css';

var List = props => {
  return (
    <div className="list-layout clearfix">
      <Sidebar
        goods={props.goods}
        viewedId={props.viewedId}
        onGoodsClick={props.onGoodsClick}
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
