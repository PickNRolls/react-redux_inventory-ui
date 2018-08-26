import React from 'react';

var GoodsCell = (props) => {
  return (
    <div className="tile-goods">
      <img src={props.payload.img} alt={props.payload.title} className="tile-goods__img"/>
      <span className="tile-goods__title">{props.payload.title}</span>
      <span className="tile-goods__price">{props.payload.price} Руб</span>
    </div>
  );
}

export default GoodsCell;
