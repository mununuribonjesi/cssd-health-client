import React, { Component } from 'react';
import './nav.css';

export class NavBar extends Component
{
  render () {
    return (
      <nav class="navbar is-primary" role="navigation">
        <div class="container">
          <div class="navbar-brand">
              <a href="/" class="navbar-item">
                HELTH
              </a>
          </div>
        </div>

        <div class="navbar-start">
          <a class="navbar-item">
              Home      
          </a>
        </div>
      </nav> 
    );
  }
}