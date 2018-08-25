import React, { Component } from 'react';

// HOC

import withCustomClassName from '../../HOC/withCustomClassName';

import './main.css';

class SearchInput extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img
          className="search-input-wrap__image"
          src="img/search-icon.png"
          alt="search"
        />
        <input
          type="text"
          className="search-input"
          placeholder="Введите название для поиска"
        />
      </div>
    );
  }
};

window.SearchInput = SearchInput;

export default withCustomClassName(SearchInput, 'search-input-wrap');
