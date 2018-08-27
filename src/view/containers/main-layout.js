// View
import Main from '../layout/main';

// Redux
import { connect } from 'react-redux';
import { getGoodsArray } from '../../store/goods/selectors';

var mapStateToProps = (state) => {
  return {
    activeView: state.UI.layoutView.index,
    goods: getGoodsArray(state)
  };
};

var MainLayout = connect(
  mapStateToProps
)(Main);

export default MainLayout;