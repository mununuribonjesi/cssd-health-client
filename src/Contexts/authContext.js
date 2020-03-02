import React, { createContext, Component } from 'react';
import axios from 'axios';

//creating Auth context

export const AuthContext = createContext();

class AuthenticationProvider extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isAuthenticated: false,
            username: '',
            password: ''
        }

        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    //UserAuthentication

    async login() {
        const response = await axios.post('https://shu-helth-uat.azurewebsites.net/api/login', {
            'username': this.state.username,
            'password': this.state.password
        });

        const token = response.data.token

        if (response.status === 200) {
            //Get Token from response 
            //set token inside the local storage 
            localStorage.setItem('token', token);
        }

        if(token)
        {
            this.setState({ isAuthenticated: true });

        }
    }

    onChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.login();
    }

    render() {
        return (
            <AuthContext.Provider 
                value={{...this.state,onChange: this.onChange
                ,submitForm: this.submitForm}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthenticationProvider;