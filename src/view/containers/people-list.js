// View
import EditableItemsList from '../components/editable-items-list';

// Redux
import { connect } from 'react-redux';
import * as selectors from '../../store/people/selectors';

var mapStateToProps = (state) => {
  return {
    items: selectors.getPeopleForList(state)
  }
};


var PeopleList = connect(
  mapStateToProps
)(EditableItemsList);

export default PeopleList;