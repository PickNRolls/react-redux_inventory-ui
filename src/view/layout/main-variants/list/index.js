import React from 'react';

// Components
import Sidebar from './sidebar';
import Body from './body';

import './main.css';

var List = (props) => {
  return (
    <main className="main">
      <div className="list-layout">
        <Sidebar payload={props.payload} />
        <Body payload={props.payload} />
      </div>
    </main>
  );
};

export default List;
