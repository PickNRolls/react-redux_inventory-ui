import React, { Component } from 'react';

// HOC
import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

class SelectSort extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="select-sort__view">
          <span>Сортировать:</span>
          &nbsp;
          <span className="select-sort__sort-by">по возрастанию цены</span>
          <img
            className="select-sort__arrow"
            src="/img/icons/arrow.svg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default withCustomClassName(SelectSort, 'select-sort');
