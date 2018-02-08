import React, { Component } from 'react';
import { userSignIn } from '../apiCall';

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
    const field = e.target.className;
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="email" placeholder="email address" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LogIn;