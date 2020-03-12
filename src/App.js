import React, { Component } from 'react';
import './App.sass';
import { NavBar } from './components/nav';
import Login from './components/Login';
import patientScreen from './components/patientScreen';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import patientRegistration from './components/patientRegistration';
import AuthContextProvider from './Contexts/authContext';

const ProtectedRoute = ({component:Component,...rest}) =>{

  return <Route {...rest} render={(props)=>{
        return localStorage.getItem('token') ?
        <Component {...props} /> : < Redirect to="/"/>
  }} />


}

export default class App extends Component {
  render () {

    return (
   <React.Fragment> 
      <AuthContextProvider>  
      <NavBar/>
      <Router>
        <Switch>
      
          <Route exact path= "/" component={Login} />
          <ProtectedRoute exact path= "/patientScreen" component={patientScreen} />
          <ProtectedRoute exact path= "/patientRegistration" component={patientRegistration}  /> 
       
        </Switch>
      </Router>
      </AuthContextProvider>
    </React.Fragment>
    );
  }
}
