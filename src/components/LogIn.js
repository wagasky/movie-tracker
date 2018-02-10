import React, { Component } from 'react';
import { userSignIn } from '../apiCall';
import './LogIn.css'

class LogIn extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    this.setState({ [field]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    userSignIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="log-in-form">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" 
                 name="email" 
                 placeholder="email address" 
                 value={ this.state.email } 
                 onChange={ this.handleChange }/>
          <input type="password" 
                 name="password" 
                 placeholder="password" 
                 value={ this.state.password } 
                 onChange={ this.handleChange }/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LogIn;