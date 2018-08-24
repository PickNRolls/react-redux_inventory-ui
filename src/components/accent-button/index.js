import React from 'react';

import './main.css';

var AccentButton = (props) => {
  var className = 'accent-button';
  if (props.className) className += ` ${props.className}`;

  return (
    <button className={className}>
      {props.children}
    </button>
  );
}

export default AccentButton;
