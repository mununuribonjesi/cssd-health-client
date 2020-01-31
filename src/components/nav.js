import React, { Component } from 'react';

export class NavBar extends Component
{
render () {
return (
   
<nav class="navbar">
<div id="navbarBasicExample" class="navbar-menu">
  <div class="nav-left">
    <a class="nav-item">
      Patient Screen 
    </a>
  </div>

  <div class="nav-center">

  <a class="nav-item">
    <input class="input" type="text" placeholder="Text input"></input>
    </a>
  </div>

  

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-primary">
          <strong>Log Out</strong>
        </a>
      </div>
    </div>
  </div>
</div>
</nav>

);
}
}