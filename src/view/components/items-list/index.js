import React, { Component } from 'react';
import PropTypes from 'prop-types';
// HOC
import withCustomClassName from '../../HOC/withCustomClassName';
// Components
import Item from './item';
// Style
import './main.css';


class ItemsList extends Component {
  render() {
    var items = [];
    for (var item in this.props.items) {
      let active = item === this.props.activeItem;
      items.push(
        <Item
          data={{
            ...this.props.items[item],
            route: '/goods/' + item,
            active
          }}
          key={item}
        />
      );
    }

    return (
      <ul className={this.props.className}>
        { items }
      </ul>
    );
  }
}

ItemsList.propTypes = {
  items: PropTypes.object,
  activeItem: PropTypes.string,
  className: PropTypes.string
};

export default withCustomClassName(ItemsList, 'items-list');
