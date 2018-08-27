// View

import ItemsList from '../components/items-list';

// Redux

import { connect } from 'react-redux';
import { getCategoryList } from '../../store/goods/selectors';

var mapStateToProps = (state, ownProps) => {
  var category = ownProps.match.params.category;
  return {
    items: getCategoryList(state),
    activeItem: category ? category : 'all'
  };
};


var CategoryList = connect(
  mapStateToProps
)(ItemsList);

export default CategoryList;
