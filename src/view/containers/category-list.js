// View

import ItemsList from '../components/items-list';

// Redux

import { connect } from 'react-redux';
import goodsSelectors from '../routes/goods/redux/selectors';

var mapStateToProps = (state, ownProps) => {
  var category = ownProps.match.params.category;
  return {
    items: goodsSelectors.getCategoryList(state),
    activeItem: category ? category : 'all'
  };
};


var CategoryList = connect(
  mapStateToProps
)(ItemsList);

export default CategoryList;
