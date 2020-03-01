import React, { createContext, Component } from 'react';
import axios from'axios';
//creating a new a context

export const AuthContext = createContext();

class AuthenticationProvider extends Component {
    state = {
        isAuthenticated: false,
        username:'',
        password:''
    }

    async login() {

        const response =
            await axios.post('https://shu-helth-uat.azurewebsites.net/api/login', {
                'username': this.state.username,
                'password': this.state.password
            });

        if (response.status === 200) {
            const token = response.data.token;
            this.state.isAuthenticated = true;
            localStorage.setItem('token', token);
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state}, this.login}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthenticationProvider;