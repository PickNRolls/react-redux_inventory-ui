import React, { Component } from 'react';
import './App.css';

// Components

import AppHeader from './layout/app-header';
import SortPanel from './layout/sort-panel';
import Sidebar from './layout/sidebar';
import Main from './layout/main';

class App extends Component {
  render() {
    return (
      <div className="App clearfix">
        <AppHeader />
        <SortPanel />
        <div className="container">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
