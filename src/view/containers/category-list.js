// View

import React, { Component } from 'react';
import ItemsList from '../components/items-list';

// Redux

import { connect } from 'react-redux';
import goodsSelectors from '../routes/goods/redux/selectors';
import goodsActions from '../routes/goods/redux/actions';

var mapStateToProps = (state, ownProps) => {
  return {
    items: goodsSelectors.getCategoryList(state),
    activeItem: ownProps.activeCategory
  };
};


var CategoryList = connect(
  mapStateToProps
)(ItemsList);

export default CategoryList;
