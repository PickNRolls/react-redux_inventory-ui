import React from 'react';

var Row = (props) => {
  return (
    <div className="tile-layout__row clearfix">
      {props.children}
    </div>
  );
}

export default Row;
