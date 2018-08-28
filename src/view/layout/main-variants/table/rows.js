import React from 'react';

import prettyPrice from '../../../libs/prettyGoodsPrice';

var Rows = props => {
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

  return rows;
}

export default Rows;
