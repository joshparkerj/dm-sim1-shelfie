import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path='/add' component={Form} />
            <Route path='/edit/:id' component={Form} />
            <Route path='/' component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
