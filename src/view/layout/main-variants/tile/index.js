import React from 'react';

// Components
import Rows from './rows';

import './main.css';

var Tile = props => {
  return (
    <div className="tile-layout">
      <Rows
        goods={props.goods}
        onGoodsClick={props.onGoodsClick}
      />
    </div>
  );
};

export default Tile;
