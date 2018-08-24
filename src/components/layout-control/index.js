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
          data="img/layout-control.svg"
          alt=""
        />
      </button>
      <button className="layout-control__option">
        <object
          type="image/svg+xml"
          className="layout-control__option-icon"
          data="img/layout-control2.svg"
          alt=""
        />
      </button>
      <button className="layout-control__option">
        <object
          type="image/svg+xml"
          className="layout-control__option-icon"
          data="img/layout-control3.svg"
          alt=""
        />
      </button>
    </div>
  );
}

export default LayoutControl;
