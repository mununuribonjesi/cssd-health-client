import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: []
        }
    }

    render() {
        const { events } = this.state;

        console.log(events);


        return (

<section class="hero is-fullheight">
  <div class="hero-body"></div>
    <div class="container">
      <div class="columns is-centered">
   
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required/>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required/>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
    
              <button class="button is-success">
                Login
              </button>
            </div>
          </form>
  </div>
  </div>
  </section>


   

        );
    }
}

export default Login;


