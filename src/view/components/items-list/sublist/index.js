import React from 'react';
import { Link } from 'react-router-dom';

// Libs
import cutString from '../../../libs/cutString';

var Sublist = (props) => {
  var items = props.items.map((item) => {
    var route = `/goods/${props.parentRoute}/${item.route}`;
    var className = 'item-sublist__item';
    if (props.active) {
      className += ' item-sublist__item--active';
    }
    var title = cutString(item.title, 168, className);

    return (
      <li className={className} key={item.title}>
        <Link to={route} className="item-sublist__link">
          { title }
        </Link>
      </li>
    );
  });

  return (
    <ul className="item-sublist">
      { items }
    </ul>
  );
}

export default Sublist;
