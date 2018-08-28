import React from 'react';

// Libs
import prettyPrice from '../../../libs/prettyGoodsPrice';

var Sidebar = (props) => {
  var goods = props.payload.map((goods) => {
    return (
      <li className="list-layout__goods" key={goods.id}>
        <img
          src={goods.previewImage}
          alt={goods.name}
          className="list-layout__goods-img"
        />

        <div className="list-layout__goods-info">
          <span className="list-layout__goods-name">
            { goods.name }
          </span>
          <span className="list-layout__goods-price main-layouts__blur">
            { prettyPrice(goods.price) } Руб
          </span>
        </div>
      </li>
    );
  });

  return (
    <aside className="list-layout__sidebar">
      <ul className="list-layout__list">
        { goods }
      </ul>
    </aside>
  );
}

export default Sidebar;
