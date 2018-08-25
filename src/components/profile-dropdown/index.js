import React, { Component } from 'react';

// HOC

import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

class ProfileDropdown extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="profile-dropdown__view">
          <div className="profile-dropdown__name">Людмила Андропова</div>
          <img
            src="img/profile-ava.png"
            className="profile-dropdown__ava"
            alt=""
          />
          <img
            src="img/arrow.svg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default withCustomClassName(ProfileDropdown, 'profile-dropdown');
