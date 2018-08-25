import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// HOC

import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

class TopNav extends Component {
  render() {
    return (
      <ul className={this.props.className}>
        <li className="top-nav__item">
          <Link to="/goods" className="top-nav__link">
            Предметы
          </Link>
        </li>
        <li className="top-nav__item">
          <Link to="/places" className="top-nav__link">
            Места
          </Link>
        </li>
        <li className="top-nav__item">
          <Link to="/people" className="top-nav__link">
            Люди
          </Link>
        </li>
      </ul>
    );
  }
}

export default withCustomClassName(TopNav, 'top-nav');
