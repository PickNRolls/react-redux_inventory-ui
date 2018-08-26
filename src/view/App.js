import React, { Component } from 'react';
import './App.css';

// Components

import AppHeader from './layout/app-header';
import SortPanel from './layout/sort-panel';
import Sidebar from './layout/sidebar';

class App extends Component {
  render() {
    var category = this.props.match.params.category;
    return (
      <div className="App">
        <AppHeader />
        <SortPanel />
        <Sidebar activeCategory={category} />
      </div>
    );
  }
}

export default App;
