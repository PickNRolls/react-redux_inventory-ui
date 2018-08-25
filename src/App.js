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
        <Sidebar
          categories={[{
            img: 'img/icons/all.svg',
            title: 'Все категории',
            route: '/goods'
          }, {
            img: 'img/icons/1.svg',
            title: 'Электроника',
            route: '/goods/electonic'
          }]}
        />
      </div>
    );
  }
}

export default App;
