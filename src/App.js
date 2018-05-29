import React, { Component } from 'react';
import TopBar from './components/topbar/TopBar'
import FilterBar from './components/topbar/FilterBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <FilterBar />
      </div>
    );
  }
}

export default App;
