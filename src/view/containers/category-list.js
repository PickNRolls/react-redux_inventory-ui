// View

import ItemsList from '../components/items-list';

// Redux

import { connect } from 'react-redux';
import { getCategoryList } from '../../store/goods/selectors';

var mapStateToProps = (state, ownProps) => {
  var category = ownProps.match.params.category;
  category = category ? category : 'all';

  return {
    items: getCategoryList(state),
    activeItem: category
  };
};


var CategoryList = connect(
  mapStateToProps
)(ItemsList);

export default CategoryList;
