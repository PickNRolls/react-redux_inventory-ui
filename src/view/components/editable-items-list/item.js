import React from 'react';

var Item = (props) => {
  var payload = props.payload;

  return (
    <li className="editable-items-list__item">
      <img
        className="editable-items-list__img"
        src={payload.img}
        alt={payload.title}
      />

      <span className="editable-items-list__title">
        {payload.title}
      </span>
      <span className="editable-items-list__subtitle">
        {payload.subtitle}
      </span>
    </li>
  );
}

export default Item;
