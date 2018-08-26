import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// HOC

import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

var isActive = function(currentPage, pageLink) {
  var is = currentPage === pageLink;
  if (is) return ' top-nav__item--active';
  return '';
};

class TopNav extends Component {
  render() {
    var page = this.props.page;

    return (
      <ul className={this.props.className}>
        <li className={'top-nav__item' + isActive(page, 'goods')}>
          <Link to="/goods" className="top-nav__link">
            Предметы
          </Link>
        </li>
        <li className={'top-nav__item' + isActive(page, 'places')}>
          <Link to="/places" className="top-nav__link">
            Места
          </Link>
        </li>
        <li className={'top-nav__item' + isActive(page, 'people')}>
          <Link to="/people" className="top-nav__link">
            Люди
          </Link>
        </li>
      </ul>
    );
  }
}

export default withCustomClassName(TopNav, 'top-nav');
