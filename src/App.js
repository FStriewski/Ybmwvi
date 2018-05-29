import React, { Component } from 'react';
import TopBar from './components/topbar/TopBar'
import FilterBar from './components/topbar/FilterBar'
import TableHeader from './components/table/TableHeader'
import TableBody from './components/table/TableBody'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <FilterBar />
        <TableHeader />
        <TableBody/>
      </div>
    );
  }
}

export default App;
