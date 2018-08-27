// View

import Main from '../layout/main';
import layouts from '../layout/main-variants';

// Redux

import { connect } from 'react-redux';

var mapStateToProps = (state) => {
  return {
    activeView: state.UI.layoutView.index
  };
};

var MainLayout = connect(
  mapStateToProps
)(Main);

export default MainLayout;