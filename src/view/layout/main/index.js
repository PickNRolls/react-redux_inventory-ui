import React, { Component } from 'react';

// Different layouts
import TileLayout from '../main-variants/tile';
import TableLayout from '../main-variants/table';
import ListLayout from '../../containers/main-layout-list';

// Components
import Pagination from '../../components/pagination';

import './main.css';
import '../main-variants/common.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(index) {
    this.setState({
      currentPage: index
    });
  }

  render() {
    var { props } = this;
    var selectedView = null;

    switch (props.activeView) {
      case 1:
        selectedView = (
          <TableLayout
            goods={props.goods}
            viewedId={props.viewedId}
            onGoodsClick={props.viewGoods}
            currentPage={this.state.currentPage}
            loading={props.loading}
          />
        );
        break;

      case 2:
        selectedView = (
          <ListLayout
            goods={props.goods}
            viewedId={props.viewedId}
            onGoodsClick={props.viewGoods}
            currentPage={this.state.currentPage}
            loading={props.loading}
          />
        );
        break;

      default:
        selectedView = (
          <TileLayout
            goods={props.goods}
            viewedId={props.viewedId}
            onGoodsClick={props.viewGoods}
            currentPage={this.state.currentPage}
            loading={props.loading}
          />
        );
        break;
    }

    return (
      <div className="main-wrap">
        <main className="main">
          {selectedView}
        </main>
        <Pagination
          onChange={this.changePage}
          className="main__pagination"
          pagesAmount="3" />
      </div>
    );
  }
}

export default Main;
