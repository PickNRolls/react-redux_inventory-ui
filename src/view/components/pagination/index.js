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
  }

  changeCurrent(pageIndex) {
    this.setState({
      current: pageIndex
    });
  }

  render() {
    var { props } = this;
    var buttons = [];
    for (var i = 0, count = props.pagesAmount; i < count; i++) {
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
        <button className="pagination__button">
          <img
            src="/img/icons/back.png"
            alt=""
            className="pagination__arrow-img"
          />
        </button>

        { buttons }

        <button className="pagination__button">
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
