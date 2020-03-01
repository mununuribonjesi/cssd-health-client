import React, { Component } from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom';
import axios from'axios';
import authContext, { AuthContext } from '../Contexts/authContext';


class Login extends Component {
  static contextType = authContext;
    constructor(props) {
        super(props)
        this.state = {
          username:'',
          password:'',
          loggedIn:false
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e)
    {
      this.setState({
        [e.target.name]:e.target.value
      });
    }

    submitForm(e)
    {
      e.preventDefault();
      this.login();
    }


    isLoggedIn()
    {
      this.setState({loggedIn:!this.state.loggedIn});
    }


  async login() {
    
      const user = {username:this.state.username,password:this.state.password}
      const response = 
      await axios.post('https://shu-helth-uat.azurewebsites.net/api/login', {
        'username':user.username,
        'password':user.password
      });

      if (response.status === 200)
      {
        const token = response.data.token;
        localStorage.setItem('token',token);
        this.setState({loggedIn:true});
      }
  }
  
    render() {

      const isLoggedIn = this.state.loggedIn;

      if(isLoggedIn)
      {
        return <Redirect to='/patientScreen'/>;
      }

      else

        return (

          <AuthContext.Consumer>

            {(context) => {
              
              const{username,password} = context;

              console.log(context);

              return(
                <section className="hero is-fullheight">
      <div className="hero-body"></div>
    <div className="container">
      <div className="columns is-centered">
          <form onSubmit={this.submitForm} action="" className="box">
            <div className="field">
              <label for="" className="label">Username</label>
              <div className="control has-icons-left">
                <input onChange={this.onChange} value={this.state.username} name="username"  type="text" className="input" required/>
              </div>
            </div>
            <div className="field">
              <label for="" className="label">Password</label>
              <div className="control has-icons-left">
              <input onChange={this.onChange} value={this.state.password} name="password"  type="password" className="input" required/>
              </div>
            </div>
            <div className="field">
    
              <button className="button is-primary" type="submit">
                Login
              </button>
            </div>
          </form>
  </div>
  </div>
  </section>

              )
            }}
          </AuthContext.Consumer>



        );
    }
  
  }
export default Login;