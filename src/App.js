import React, { Component } from 'react';
import './App.css';

// Components

import AppHeader from './layout/app-header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
      </div>
    );
  }
}

export default App;
