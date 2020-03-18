import React, { Component } from 'react';
import axios from 'axios';
import './patientRegistration.css';
import { Redirect } from 'react-router-dom';

class patientRegistration extends Component {
    constructor(props)
    {

        super(props)

        this.state={
            username:'',
            password:'',
            name:'',
            email:'',
            ispractitioner:"true",
            allergies:[],
            treatments:[],
            heartRate:[]
        }

        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    async patientRegistration() {

        const token = localStorage.getItem('token')
        
        const response = await axios.put('https://shu-helth-uat.azurewebsites.net/api/register', {


            headers:
            {
                'Authorization': `Bearer ${token}`
            },
            'username': this.state.username,
            'password': this.state.password,
            'name': this.state.name,
            'email': this.state.email,
            'isPractioner':this.state.isPractioner,
            'allergies':this.state.allergies,
            'treatments':this.state.treatments
        });

        if(response.status===200){

          
        }  
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.patientRegistration();
        window.location.reload(false);
    }

render() 
{
    return(
        <section className="hero is-fullheight">
<div className="hero-body"></div>
<div className="container">
  <div className="columns is-centered">
    <form onSubmit={this.submitForm} className="box">
      <div className="field">
        <label for="" className="label">Username</label>
        <div className="control has-icons-left">
          <input onChange={this.onChange} value={this.username} name="username" type="text" className="input" required />
        </div>
      </div>
      <div className="field">
        <label for="" className="label">Password</label>
        <div className="control has-icons-left">
          <input onChange={this.onChange} value={this.password} name="password" type="password" className="input" required />
        </div>
      </div>
      <div className="field">
        <label for="" className="label">name</label>
        <div className="control has-icons-left">
          <input onChange={this.onChange} value={this.name} name="name" type="text" className="input" required />
        </div>
      </div>
      <div className="field">
        <label for="" className="label">email</label>
        <div className="control has-icons-left">
          <input onChange={this.onChange} value={this.email} name="email" type="text" className="input" required />
        </div>
      </div>
      <div className="field">
        <label for="" className="label">allergies</label>
        <div className="control has-icons-left">
          <input onChange={this.onChange} value={this.allergies} name="allergies" type="text" className="input" required />
        </div>
      </div>
      <div className="field">
        <label for="" className="label">treatments</label>
        <div className="control has-icons-left">
          <input onChange={this.onChange} value={this.trea} name="treatments" type="text" className="input" required />
        </div>
      </div>
      <div className="field">
        <button className="button is-primary" type="submit">
          Register
      </button>
      </div>
    </form>
  </div>
</div>
</section>
    );
}
    }


export default patientRegistration;


