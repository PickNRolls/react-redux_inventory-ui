import React from 'react';

import './main.css';

var Tile = (props) => {
  var goods = [0,0,0,0,0].map(() => {
    return (
      <div className="tile-goods">
        <img src="img/goods/3.jpg" alt="" className="tile-goods__img"/>
        <span className="tile-goods__title">Sony Dualshock 5</span>
        <span className="tile-goods__price">6 000 Руб</span>
      </div>
    );
  });

  return (
    <div className="tile-layout">
      <div className="tile-layout__row clearfix">
        { goods }
      </div>
      <div className="tile-layout__row clearfix">
        { goods }
      </div>
    </div>
  );
}

export default Tile;
