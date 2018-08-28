import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import AppHeader from './layout/app-header';
import SortPanel from './layout/sort-panel';
import Sidebar from './layout/sidebar';
import MainLayout from './containers/main-layout';

class App extends Component {
  render() {
    return (
      <div className="App clearfix">
        <AppHeader />
        <div className="container clearfix">
          <Route path="/:route?" component={Sidebar} />
          <SortPanel />
          <Route
            path="/(goods)?/:category?/:subcategory?"
            component={MainLayout}
          />
        </div>
      </div>
    );
  }
}

export default App;
