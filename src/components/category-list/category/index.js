import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cutString from '../../../libs/cutString';

import './main.css';

class Category extends Component {
  render() {
    var props = this.props;
    var className = 'category-list__item';
    if (props.data.active) className += ' category-list__item--active';
    var title = cutString(props.data.title, 168, className);

    return (
      <li className={className}>
        <Link className="category-list__link" to={props.data.route}>
          <div className="category-list__image-wrap">
            <object
              type="image/svg+xml"
              className="category-list__image"
              data={props.data.img}
              alt={props.data.title}
            >Your browser doesn't support object tag</object>
          </div>
          <div className="category-list__title">
            { title }
          </div>
        </Link>
      </li>
    );
  }
}

export default Category;
