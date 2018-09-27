import React, { Component } from 'react';

// Components
import Rows from './rows';
import Loader from '../../../components/data-loader';

import './main.css';

class Tile extends Component {
  render() {
    var { props } = this;

    if (props.loading)
    return (
      <div className="tile-layout">
        <Loader />
      </div>
    );

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
