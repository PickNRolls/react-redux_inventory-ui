import React, { Component } from 'react';
import './App.css';

// Components

import AppHeader from './layout/app-header';
import SortPanel from './layout/sort-panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <SortPanel />
      </div>
    );
  }
}

export default App;
