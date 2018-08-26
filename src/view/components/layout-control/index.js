import React from 'react';

import './main.css';

var LayoutControl = (props) => {
  return (
    <div className="layout-control">
      <button
        className="layout-control__option layout-control__option--active"
        >
        <object
          type="image/svg+xml"
          className="layout-control__option-icon"
          data="img/icons/layout-control.svg"
          alt=""
        >Your browser doesn't support object tag</object>
      </button>
      <button className="layout-control__option">
        <object
          type="image/svg+xml"
          className="layout-control__option-icon"
          data="img/icons/layout-control2.svg"
          alt=""
        >Your browser doesn't support object tag</object>
      </button>
      <button className="layout-control__option">
        <object
          type="image/svg+xml"
          className="layout-control__option-icon"
          data="img/icons/layout-control3.svg"
          alt=""
        >Your browser doesn't support object tag</object>
      </button>
    </div>
  );
}

export default LayoutControl;
