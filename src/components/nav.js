import React, { Component } from 'react';
import './nav.css';

export class NavBar extends Component
{
  render () {
    return (
      <nav className="navbar is-primary" role="navigation">
        <div className="container">
          <div className="navbar-brand">

              <a href="/" className="navbar-item">
                HELTH
              </a>
     
          </div>
        </div>

        <div className="navbar-start">
          <a href='patientScreen' className="navbar-item">
              Patients      
          </a>

          <a href='patientRegistration'className="navbar-item">
              Register      
          </a>
        </div>
      </nav> 
    );
  }
}