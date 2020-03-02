import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
import authContext, { AuthContext } from '../Contexts/authContext';


class Login extends Component {
  static contextType = authContext;
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          var { isAuthenticated,username,password,onChange,submitForm} = context;
          if (isAuthenticated) {

            return <Redirect to='/patientScreen' />;
          }

          else
          
            return (
              <section className="hero is-fullheight">
                <div className="hero-body"></div>
                <div className="container">
                  <div className="columns is-centered">
                    <form onSubmit={submitForm} action="" className="box">
                      <div className="field">
                        <label for="" className="label">Username</label>
                        <div className="control has-icons-left">
                          <input onChange={onChange} value={username} name="username" type="text" className="input" required />
                        </div>
                      </div>
                      <div className="field">
                        <label for="" className="label">Password</label>
                        <div className="control has-icons-left">
                          <input onChange={onChange} value={password} name="password" type="password" className="input" required />
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