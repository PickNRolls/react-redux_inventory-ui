// View
import PopupsCollection from '../components/popups-collection';

// Redux
import { connect } from 'react-redux';
import * as UIActions from '../redux/actions';

var mapStateToProps = state => {
  return {
    enabled: state.UI.popupIsEnabled,
    popupIndex: state.UI.popupIndex
  };
};

var mapDispatchToProps = dispatch => {
  return {
    closePopup() {
      dispatch(UIActions.togglePopup(false));
    }
  }
};

var Popups = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupsCollection);

export default Popups;
