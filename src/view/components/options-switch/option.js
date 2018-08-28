import React from 'react';

var Option = props => {
  var className = 'options-switch__option';
  if (props.active) className += ' options-switch__option--active';
  return (
    <button className={className} onClick={props.onClick}>
      <img
        className="options-switch__option-icon"
        src={props.img}
        alt="" />
    </button>
  );
}

export default Option;
