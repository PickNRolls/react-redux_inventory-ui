import React from 'react';

// Components

import Goods from './goods';
import Row from './row';

var Rows = (props) => {
  var goods = props.payload.map((goodsPayload) => {
    return (
      <Goods payload={goodsPayload} />
    );
  });

  var rowsAmount = Math.ceil(props.payload.length / 5);
  var rows = [];

  for (var i = 0; i < rowsAmount; i++) {
    rows.push(
      <Row>
        {goods.slice(5 * i, 5 * (i + 1))}
      </Row>
    );
  }

  return rows;
}

export default Rows;
