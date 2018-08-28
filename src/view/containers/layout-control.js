// View
import OptionsSwitch from '../components/options-switch';
import * as UIActions from '../redux/actions';
import layouts from '../layout/main-variants';

// Redux
import { connect } from 'react-redux';

var mapStateToProps = state => {
  return {
    images: layouts.map(meta => meta.img),
    activeView: state.UI.layoutView.index
  };
};

var mapDispatchToProps = dispatch => {
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
