// View
import Main from '../layout/main';

// Redux
import { connect } from 'react-redux';
import { getGoodsArray as getGoods } from
  '../../store/goods/selectors';
import { viewGoods } from '../../store/goods/actions';

var category = null;

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

var mapDispatchToProps = (dispatch) => {
  return {
    viewGoods(id) {
      dispatch(viewGoods(id));
    }
  };
};

var MainLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainLayout;