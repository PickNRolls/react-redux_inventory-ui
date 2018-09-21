import React from 'react';

import prettyPrice from '../../../libs/prettyGoodsPrice';

const MAX_ROWS_PER_PAGE = 6;

var Rows = props => {
  if (props.goods == null) {
    return null;
  }

  var rows = props.goods.map(goods => {
    return (
      <div
        className="table-layout__row"
        onClick={() => props.onGoodsClick(goods.id)}
        key={goods.id}>
        <img
          src={goods.previewImage}
          alt={goods.name}
          className="main-layouts__img table-layout__img"
        />

        <div className="table-layout__name">
          { goods.name }
        </div>

        <div className="main-layouts__blur table-layout__price">
          { prettyPrice(goods.price) } Руб
        </div>

        <div className="table-layout__photo-amount">
          { goods.images.length } фотографий
        </div>

        <div className="table-layout__guarantee">
          { goods.guaranteeUpTo }
        </div>

        <div className="table-layout__purchase-date">
          { goods.purchaseDate }
        </div>

        <div className="table-layout__responsible">
          { goods.responsible }
        </div>
      </div>
    );
  });

  var currentPage = props.currentPage - 1;
  var startIndex = currentPage * MAX_ROWS_PER_PAGE;
  var lastIndex = startIndex + MAX_ROWS_PER_PAGE;
  var renderedRows = rows.slice(startIndex, lastIndex);

  return renderedRows;
}

export default Rows;
