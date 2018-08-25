import React, { Component } from 'react';

// HOC

import withCustomClassName from '../../HOC/withCustomClassName';

// Components

import Category from './category';

import './main.css';

class CategoryList extends Component {
  render() {
    var categories = this.props.categories.map((category) => {
      return <Category data={category} />;
    });

    return (
      <ul className={this.props.className}>
        { categories }
      </ul>
    );
  }
}

export default withCustomClassName(CategoryList, 'category-list');
