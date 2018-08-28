import React from 'react';

// Components
import Breadcrumb from '../../../components/goods-breadcrumb';

var Body = (props) => {
  var goods = props.viewedGoods;
  var breadcrumb = props.breadcrumb;

  return (
    <div className="list-layout__body goods-info">
      <span className="goods-info__name">
        { goods.name }
      </span>

      <Breadcrumb
        className="goods-info__breadcrumb"
        category={breadcrumb[0]}
        subcategory={breadcrumb[1]}
      />

      <div className="goods-info__slider">
        Slider
      </div>
    </div>
  );
}

export default Body;
