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
            route: '/goods',
            active: true
          }, {
            img: 'img/icons/1.svg',
            title: 'Электроника',
            route: '/goods/electonic',
            active: false
          }, {
            img: 'img/icons/2.svg',
            title: 'Компьютерная техника',
            route: '/goods/computers',
            active: false
          }]}
        />
      </div>
    );
  }
}

export default App;
