import React from 'react';

// Components
import Rows from './rows';

import './main.css';

var Tile = props => {
  return (
    <main className="main">
      <div className="tile-layout">
        <Rows
          goods={props.goods}
          onGoodsClick={props.onGoodsClick}
        />
      </div>    
    </main>
  );
};

export default Tile;
