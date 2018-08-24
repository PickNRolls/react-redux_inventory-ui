import React from 'react';

import './main.css';

var ProfileDropdown = () => {
  return (
    <div className="profile-dropdown">
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

export default ProfileDropdown;
