import React, { Component } from 'react';

// HOC

import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

class AccentButton extends Component {
  render() {
    return (
      <button className={this.props.className}>
        {this.props.children}
      </button>
    );
  }
}

export default withCustomClassName(AccentButton, 'accent-button');
