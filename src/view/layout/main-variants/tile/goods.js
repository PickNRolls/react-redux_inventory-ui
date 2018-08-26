import React from 'react';

// libs

import prettyPrice from '../../../libs/prettyGoodsPrice';

var GoodsCell = (props) => {
  var price = prettyPrice(props.payload.price);
  return (
    <div className="tile-goods">
      <img
        src={props.payload.previewImage}
        alt={props.payload.name}
        className="tile-goods__img"
      />
      <span className="tile-goods__title">{props.payload.name}</span>
      <span className="tile-goods__price">{price} Руб</span>
    </div>
  );
}

export default GoodsCell;
