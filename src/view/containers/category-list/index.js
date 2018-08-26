// View

import React, { Component } from 'react';
import ItemsList from '../../components/items-list';

// Redux

import store from '../../../store';
import { connect } from 'react-redux';
import goodsSelectors from '../../routes/goods/redux/selectors';
import goodsActions from '../../routes/goods/redux/actions';


class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick(category) {
    store.dispatch(goodsActions.changeCategory(category));
  }

  render() {
    return (
      <ItemsList />
    );
  }
}

var mapStateToProps = (state) => {
  return {
    items: goodsSelectors.getCategoryList(state),
    activeItem: state.goods.UI.activeCategory
  };
};


CategoryList = connect(
  mapStateToProps
)(ItemsList);

export default CategoryList;
