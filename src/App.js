import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { NavBar } from './components/nav';

export default class App extends Component {


  render () {
    return (
      <div> 
            <NavBar/>
      </div>
    );
  }
}
