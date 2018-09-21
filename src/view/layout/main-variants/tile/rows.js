import React, { Component } from 'react';

// Components
import Goods from './goods';
import Row from './row';

const MAX_ROWS_PER_PAGE = 2;
const GOODS_IN_ROW = 5;

class Rows extends Component {
  render() {
    var { props } = this;

    if (props.goods == null) {
      return null;
    }

    var goods = props.goods.map(goodsPayload => {
      return (
        <Goods
          payload={goodsPayload}
          onClick={() => props.onGoodsClick(goodsPayload.id)}
          key={goodsPayload.id}
        />
      );
    });

    var renderedRows = [];

    var currentPage = props.currentPage;

    let indexOfLastRow = MAX_ROWS_PER_PAGE * currentPage - 1;
    let indexOfStartRow = indexOfLastRow - MAX_ROWS_PER_PAGE + 1;

    let indexOfStart = indexOfStartRow * GOODS_IN_ROW;
    let indexOfLast = indexOfLastRow * GOODS_IN_ROW;

    for (var i = 0; i < MAX_ROWS_PER_PAGE; i++) {

      renderedRows.push(
        <Row key={i}>
          {goods.slice(indexOfStart + GOODS_IN_ROW * i, indexOfLast + GOODS_IN_ROW * i)}
        </Row>
      );
    }

    return renderedRows;
  }
}

export default Rows;
