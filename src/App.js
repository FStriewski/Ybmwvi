import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import FilterBar from './components/topbar/FilterBar'
import TableHeader from './components/table/TableHeader'
import TableBody from './components/table/TableBody'
import DetailsCard from './components/details/DetailsCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" render={() => <Redirect to="/people" />} />

          <Route exact path="/people" component={} />
          <Route exact path="/people/:id" component={} />

          {/* <TopBar />
          <FilterBar />
          <DetailsCard />
          <TableHeader />
        <TableBody/> */}
        </div>
      </Router>
    );
  }
}

export default App;
