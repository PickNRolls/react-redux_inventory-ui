import React, { Component } from 'react';

// HOC
import withCustomClassName from '../../HOC/withCustomClassName';

// Components
import Button from './button';

import './main.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };

    this.changeCurrent = this.changeCurrent.bind(this);
    this.stepTo = this.stepTo.bind(this);
  }

  stepTo(direction) {
    // 0 - left, 1 - right

    if (this.state.current === 1 && direction === 0) return;
    if (this.state.current === this.pagesAmount && direction === 1) return;

    if (direction === 1)
      return this.changeCurrent(this.state.current + 1);

    if (direction === 0)
      return this.changeCurrent(this.state.current - 1);
  }

  changeCurrent(pageIndex) {
    this.props.onChange(pageIndex);
    this.setState({
      current: pageIndex
    });
  }

  render() {
    var { props } = this;
    var buttons = [];
    this.pagesAmount = Math.ceil(props.itemsAmount / props.itemsPerPage);
    for (var i = 0; i < this.pagesAmount; i++) {
      let inner = i + 1;

      buttons.push(
        <Button
          onClick={this.changeCurrent}
          inner={inner}
          current={inner === this.state.current}
          key={inner}
          >
        </Button>);
    }

    return (
      <div className={this.props.className}>
        <button
          className="pagination__button"
          onClick={() => this.stepTo(0)}
          >
          <img
            src="/img/icons/back.png"
            alt=""
            className="pagination__arrow-img"
          />
        </button>

        { buttons }

        <button
          className="pagination__button"
          onClick={() => this.stepTo(1)}
          >
          <img
            src="/img/icons/back.png"
            alt=""
            className="pagination__arrow-img pagination__arrow-img--next"
          />
        </button>
      </div>
    );
  }
}

export default withCustomClassName(Pagination, 'pagination');
