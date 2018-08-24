import React from 'react';

import './main.css';

var AccentButton = (props) => {
  return (
    <button className="accent-button">
      {props.children}
    </button>
  );
}

export default AccentButton;
