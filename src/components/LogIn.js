import React, { Component } from 'react';
import { redirect, withRouter } from 'react-router-dom';
import { setUser } from '../actions/index';
import * as actions from '../actions/index';
import { userSignIn } from '../apiCall';
<<<<<<< HEAD
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import { setUser } from '../actions/index';
import * as actions from '../actions/index'
=======
import './LogIn.css'
>>>>>>> Clean up adjust movie card size and format LogIn.js
>>>>>>> Clean up adjust movie card size and format LogIn.js

class LogIn extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    this.setState({ [field]: value });
  }

  loginSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state
    const results = await userSignIn( email, password );
    const user = await results.data;

    if (!results) {
      alert('Oops! The email and password do not match');
    } else {
      this.props.setUser(user);
      this.props.history.push('/favorites')
    }
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

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(LogIn));

