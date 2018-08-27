// View
import Main from '../layout/main';

// Redux
import { connect } from 'react-redux';
import { getGoodsArray as getGoods } from
  '../../store/goods/selectors';

var category = null;

var mapStateToProps = (state, ownProps) => {
  var params = ownProps.match.params;

  if (params[0] && params.subcategory) {
    category = params.subcategory;
  } else if (params[0] && params.category) {
    category = params.category;
  }

  return {
    activeView: state.UI.layoutView.index,
    goods: getGoods(state, category)
  };
};

var MainLayout = connect(
  mapStateToProps
)(Main);

export default MainLayout;