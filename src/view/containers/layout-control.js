// View

import OptionsSwitch from '../components/options-switch';
import UIActions from '../redux/actions';

// Redux

import { connect } from 'react-redux';

var mapStateToProps = (state) => {
  return {
    images: [
      'img/icons/layout-control.svg',
      'img/icons/layout-control2.svg',
      'img/icons/layout-control3.svg'
    ],
    activeView: state.UI.layoutView
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    onOptionClick(index) {
      dispatch(UIActions.changeMainLayout(index));
    }
  }
};

var LayoutControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsSwitch);

export default LayoutControl;
