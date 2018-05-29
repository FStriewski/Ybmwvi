import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import FilterBar from './components/topbar/FilterBar'
import TableUnit from './components/table/TableUnit'
import DetailsUnit from './components/details/DetailsUnit'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <FilterBar />

          <Route exact path="/" render={() => <Redirect to="/people" />} />

          <Route exact path="/people" component={TableUnit} />
          <Route exact path="/people/:name" component={DetailsUnit} />

        </div>
      </Router>
    );
  }
}

export default App;
