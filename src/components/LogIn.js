import React, { Component } from 'react';
import { userSignIn } from '../apiCall';
import { connect } from 'react-redux';
import { setUser } from '../actions/index';
import * as actions from '../actions/index'

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
    const field = e.target.className;
    const value = e.target.value;

    this.setState({ [field]: value });
  }

  loginSubmit = async (e) => {
    e.preventDefault();
    const results = await userSignIn(this.state.email, this.state.password);
    const user = await results.data

    

    if (!results) {
      alert('Oops! The email and password do not match');
    } else {
      this.props.setUser(user);
      // this.props.history.push('/')
    }

  }

  render() {

    return (
      <div className="log-in-form">
        <form onSubmit={this.loginSubmit}>
          <input type="text" className="email" placeholder="email address" name="email" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
})

export default connect(null, mapDispatchToProps)(LogIn)

