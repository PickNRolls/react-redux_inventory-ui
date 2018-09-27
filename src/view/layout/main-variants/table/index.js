import React from 'react';

// Components
import Header from './header';
import Rows from './rows';
import Loader from '../../../components/data-loader';

import './main.css';

var TableLayout = props => {
  var LoadingPart;
  if (props.loading) LoadingPart = <Loader />;
  else LoadingPart = (
    <Rows
      goods={props.goods}
      onGoodsClick={props.onGoodsClick}
      currentPage={props.currentPage}
    />
  );

  return (
    <div className="table-layout">
      <Header />
      { LoadingPart }
    </div>
  );
}

export default TableLayout;
