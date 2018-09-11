import React from 'react';

// Libs
import prettyPrice from '../../../libs/prettyGoodsPrice';

var Sidebar = props => {
  if (props.goods == null) {
    return null;
  }

  var goods = props.goods.map(goods => {
    var className = 'list-layout__goods';
    if (props.viewedId === goods.id)
      className += ' list-layout__goods--active';

    return (
      <li
        className={className}
        onClick={() => props.onGoodsClick(goods.id)}
        key={goods.id}>
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
