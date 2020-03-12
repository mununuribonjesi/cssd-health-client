import React, { Component } from 'react';
import './nav.css';
import authContext, { AuthContext } from '../Contexts/authContext';

export class NavBar extends Component {
    static contextType = authContext;

  render() {
    return (
      <div className="container is-fluid">
      <nav className="navbar is-primary" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="patientScreen" className="navbar-item">
              HELTH
              </a>
          </div>
        </div>
        <div className="navbar-start">
          <a href='patientScreen' className="navbar-item">
            Patients
          </a>

          <a href='patientRegistration' className="navbar-item">
            Register
          </a>
        </div>

        <AuthContext.Consumer>
          {(context) => {
            var {userLogout } = context;
            const token = localStorage.getItem('token');
            if (token) {
              return <div className="navbar-end">
                <a onClick={userLogout} className="navbar-item">
                  Log Out
              </a>
              </div>
            }
            
          }}
        </AuthContext.Consumer>
      </nav>
      </div>
    );
  }
}