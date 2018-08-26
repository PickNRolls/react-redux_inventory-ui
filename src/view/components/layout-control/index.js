import React from 'react';

import './main.css';

var LayoutControl = (props) => {
  return (
    <div className="layout-control">
      <button
        className="layout-control__option layout-control__option--active"
        >
        <img
          className="layout-control__option-icon"
          src="img/icons/layout-control.svg"
          alt="" />
      </button>
      <button className="layout-control__option">
        <img
          className="layout-control__option-icon"
          src="img/icons/layout-control2.svg"
          alt="" />
      </button>
      <button className="layout-control__option">
        <img
          className="layout-control__option-icon"
          src="img/icons/layout-control3.svg"
          alt="" />
      </button>
    </div>
  );
}

export default LayoutControl;
