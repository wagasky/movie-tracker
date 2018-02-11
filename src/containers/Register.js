import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect, withRouter, Link } from 'react-router-dom';
import { setUser } from '../actions/index';
import { userSignIn, addNewUser } from '../apiCall';

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      name: '',
      email: '',
      password: '',
      errorMessage: null,
      newAcctMessage: null
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.className;
    const value = e.target.value;

    this.setState({ [field]: value });
  }

  registerSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state
    const results = await addNewUser({ name, email, password });
    const userResults = await userSignIn(email, password);
    const user = await userResults.data; 

    this.updateMessage(results)
  }

  updateMessage = async (results) => {
    if(results.status !== 'success') {
      this.setState({errorMessage: "That email is already registered. Please try again or login."})
    } else {
      this.setState({newAcctMessage: "Registration successful. Please login."})
    }
  }

  render() {
    return (
      <div className="log-in-form">
        <form onSubmit={ this.registerSubmit }>
          <h3 className="acct-create">{ this.state.newAcctMessage }</h3>
          <input type="text" className="name" placeholder="Your Name" name="email" onChange={this.handleChange}/>
          <input type="text" className="email" placeholder="email address" name="email" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <button type="submit"
                  className="submit-button">Register</button>
          <h3 className="login-error">{ this.state.errorMessage }</h3>
          <Link to="/login">Login</Link>
        </form>
      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addNewUser: (user) => dispatch(addNewUser(user)),
  setUser: (user) => dispatch(setUser(user))
})

export default withRouter(connect(null, mapDispatchToProps)(Register));