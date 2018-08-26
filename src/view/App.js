import React, { Component } from 'react';
import './App.css';

// Components

import AppHeader from './layout/app-header';
import SortPanel from './layout/sort-panel';
import Sidebar from './layout/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <SortPanel />
        <Sidebar />
      </div>
    );
  }
}

export default App;
