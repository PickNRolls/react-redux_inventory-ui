import React from 'react';

// Components

import Goods from './goods';
import Row from './row';

var Rows = (props) => {
  var goods = props.goods.map((goodsPayload) => {
    return (
      <Goods
        payload={goodsPayload}
        onClick={() => props.onGoodsClick(goodsPayload.id)}
        key={goodsPayload.id}
      />
    );
  });

  var rowsAmount = Math.ceil(props.goods.length / 5);
  var rows = [];

  for (var i = 0; i < rowsAmount; i++) {
    rows.push(
      <Row key={i}>
        {goods.slice(5 * i, 5 * (i + 1))}
      </Row>
    );
  }

  return rows;
}

export default Rows;
