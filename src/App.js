import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { NavBar } from './components/nav';
import Login from './components/Login';
import patientScreen from './components/patientScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {


  render () {
    return (
      <React.Fragment>     
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path= "/" component={Login} />
          <Route exact path= "/patientScreen" component={patientScreen} />
        </Switch>
      </Router>
    </React.Fragment>
    );
  }
}
