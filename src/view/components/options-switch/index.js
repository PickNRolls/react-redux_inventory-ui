import React from 'react';

// Components
import Option from './option';

import './main.css';

var OptionsSwitch = props => {
  var options = props.images.map((image, index) => {
    return (
      <Option
        img={image}
        active={index === props.activeView}
        key={index}
        onClick={() => props.onOptionClick(index)}
      />
    );
  });

  return (
    <div className="options-switch">
      { options }
    </div>
  );
}

export default OptionsSwitch;
