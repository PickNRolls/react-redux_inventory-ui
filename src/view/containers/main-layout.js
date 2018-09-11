// View
import Main from '../layout/main';
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { getGoodsArray as getGoods } from
  '../../store/goods/selectors';
import {
  viewGoods,
  receiveGoods
} from '../../store/goods/actions';
import { fetchGoods } from '../../api';

var category = null;

class MainLayout extends Component {
  componentDidMount() {
    fetchGoods()
    .then(goods =>
      this.props.receiveGoods(goods)
    );
  }

  render() {
    return <Main {...this.props} />;
  }
};

var mapStateToProps = (state, ownProps) => {
  var params = ownProps.match.params;

  if (params[0] && params.subcategory) {
    category = params.subcategory;
  } else if (params[0] && params.category) {
    category = params.category;
  } else if (!params[0] && !params.category) {
    category = null;
  }

  return {
    activeView: state.UI.layoutView.index,
    viewedId: state.goods.viewedId,
    goods: getGoods(state, category)
  };
};

var mapDispatchToProps = dispatch => {
  return {
    viewGoods(id) {
      dispatch(viewGoods(id));
    },
    receiveGoods(goods) {
      dispatch(receiveGoods(goods));
    }
  };
};

MainLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);

export default MainLayout;
