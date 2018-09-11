// View
import ListLayout from '../layout/main-variants/list';

// Redux
import { connect } from 'react-redux';

var mapStateToProps = (state, ownProps) => {
  var viewedGoods = state.goods.byId[ownProps.viewedId];

  if (viewedGoods == null) {
    return {};
  }
  
  var subcategory = state.subcategoriesByName[viewedGoods.subcategory];
  var subcategoryObj = {
    route: viewedGoods.category,
    title: subcategory.title
  };

  var categoryRoute = subcategory.category;
  var categoryObj = {
    route: categoryRoute,
    title: state.categoriesByName[categoryRoute].title
  };

  var breadcrumb = [categoryObj, subcategoryObj];

  return {
    viewedGoods,
    breadcrumb
  };
};


var ListLayoutContainer = connect(
  mapStateToProps
)(ListLayout);

export default ListLayoutContainer;
