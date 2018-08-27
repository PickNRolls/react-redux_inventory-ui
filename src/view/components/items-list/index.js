import React, { Component } from 'react';
// HOC
import withCustomClassName from '../../HOC/withCustomClassName';
// Components
import Item from './item';
import Sublist from './sublist';
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

      var sublist = this.props.sublist;
      if (sublist && active) {
        items.push(
          <Sublist
            items={sublist}
            parentRoute={item}
            key={item + ' sublist'}
          />
        );
      }
    }

    return (
      <ul className={this.props.className}>
        { items }
      </ul>
    );
  }
}

export default withCustomClassName(ItemsList, 'items-list');
