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
    const type = e.target.className;
    const input = e.target.value;

    this.setState({ [type]: input });
  }

  render() {
    return (
      <div className="log-in-form">
        <form onSubmit={userSignIn}>
          <input type="text" className="email" placeholder="email address" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LogIn;