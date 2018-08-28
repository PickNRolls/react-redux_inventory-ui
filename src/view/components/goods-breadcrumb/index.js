import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// HOC
import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

class GoodsBreadcrumb extends Component {
  render() {
    var category = this.props.category;
    var subcategory = this.props.subcategory;

    var categoryRoute = '/goods/' + category.route;
    var subcategoryRoute = categoryRoute + '/' + subcategory.route;

    return (
      <ul className={this.props.className}>
        <li className="breadcrumb__item">
          <Link
            to="/goods/all"
            className="breadcrumb__link">
            Предметы
          </Link>
        </li>

        <img
          className="breadcrumb__arrow"
          src="/img/icons/breadcrumb-arrow.png"
          alt=""
        />

        <li className="breadcrumb__item">
          <Link
            to={categoryRoute}
            className="breadcrumb__link">
            { category.title }
          </Link>
        </li>

        <img
          className="breadcrumb__arrow"
          src="/img/icons/breadcrumb-arrow.png"
          alt=""
        />

        <li className="breadcrumb__item">
          <Link
            to={subcategoryRoute}
            className="breadcrumb__link breadcrumb__link--sub">
            { subcategory.title }
          </Link>
        </li>
      </ul>
    );
  }
}

export default withCustomClassName(GoodsBreadcrumb, 'breadcrumb');
