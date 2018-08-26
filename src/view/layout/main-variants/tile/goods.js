import React from 'react';

var GoodsCell = (props) => {
  return (
    <div className="tile-goods">
      <img
        src={props.payload.previewImage}
        alt={props.payload.name}
        className="tile-goods__img"
      />
      <span className="tile-goods__title">{props.payload.name}</span>
      <span className="tile-goods__price">{props.payload.price} Руб</span>
    </div>
  );
}

export default GoodsCell;
