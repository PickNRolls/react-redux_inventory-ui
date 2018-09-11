// View
import ItemsList from '../components/items-list';

// Redux
import { connect } from 'react-redux';
import {
  getCategoryList,
  getSubcategoriesOf
} from '../../store/categories/selectors';

var mapStateToProps = (state, ownProps) => {
  var category = ownProps.match.params.category;
  category = category ? category : 'all';

  var subcategories = getSubcategoriesOf(state, category);

  if (subcategories) {
    subcategories = subcategories.map(name => {
      return {
        title: state.subcategoriesByName[name].title,
        route: name
      };
    });
  }

  return {
    items: getCategoryList(state),
    sublist: subcategories,
    activeItem: category
  };
};


var CategoryList = connect(
  mapStateToProps
)(ItemsList);

export default CategoryList;
