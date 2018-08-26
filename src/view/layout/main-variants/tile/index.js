import React from 'react';

// Components

import Rows from './rows';

import './main.css';

import data from '../data';

var Tile = (props) => {
  return (
    <div className="tile-layout">
      <Rows payload={data} />
    </div>
  );
}

export default Tile;
