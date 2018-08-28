import React, { Component } from 'react';

// HOC
import withCustomClassName from '../../HOC/withCustomClassName';

// Components
import Item from './item';

import './main.css';

class EditableItemsList extends Component {
  render() {
    var items = this.props.items.map(item =>
      <Item payload={item} key={item.id} />
    );

    return (
      <ul className={this.props.className}>
        { items }
      </ul>
    );
  }
}

export default withCustomClassName(
  EditableItemsList,
  'editable-items-list'
);
