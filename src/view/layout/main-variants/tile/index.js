import React, { Component } from 'react';

// Components
import Rows from './rows';

import './main.css';

class Tile extends Component {
  render() {
    var { props } = this;

    return (
      <div className="tile-layout">
        <Rows
          goods={props.goods}
          onGoodsClick={props.onGoodsClick}
          currentPage={props.currentPage}
        />
      </div>
    );
  }
};

export default Tile;
