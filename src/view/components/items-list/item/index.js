import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Libs
import cutString from '../../../libs/cutString';

import './main.css';

class Item extends Component {
  render() {
    var props = this.props;
    var className = 'item-list__item';
    if (props.data.active) className += ' item-list__item--active';
    var title = cutString(props.data.title, 168, className);

    return (
      <li className={className}>
        <Link className="item-list__link" to={props.data.route}>
          <div className="item-list__image-wrap">
            <img
              className="item-list__image"
              src={props.data.img}
              alt={props.data.title} />
          </div>
          <div className="item-list__title">
            { title }
          </div>
        </Link>
      </li>
    );
  }
}

export default Item;
