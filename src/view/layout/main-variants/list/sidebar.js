import React from 'react';

// Libs
import prettyPrice from '../../../libs/prettyGoodsPrice';

const MAX_GOODS_PER_PAGE = 6;

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

  var currentPage = props.currentPage - 1;
  var startIndex = currentPage * MAX_GOODS_PER_PAGE;
  var lastIndex = startIndex + MAX_GOODS_PER_PAGE;
  var renderedGoods = goods.slice(startIndex, lastIndex);

  return (
    <aside className="list-layout__sidebar">
      <ul className="list-layout__list">
        { renderedGoods }
      </ul>
    </aside>
  );
}

export default Sidebar;
