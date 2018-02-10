import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect, withRouter } from 'react-router-dom';
import { setUser } from '../actions/index';
import { userSignIn, addNewUser } from '../apiCall'

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      name: '',
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

  registerSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = this.state
    const results = await addNewUser({ name, email, password });
    const userResults = await userSignIn(email, password);
    const user = await userResults.data

    this.autoLogIn(user)
  }

  autoLogIn = async (user) => {
    const { email, password } = this.state;

    if (!user) {
      alert('That email is already registered. You can login instead');
      this.props.history.push('/login');
    } else {
      const results = await userSignIn(email, password);
      const userData = await results.data;
      this.props.setUser(userData)
    }
  }

  render() {
    return (
      <div className="log-in-form">
        <form onSubmit={ this.registerSubmit }>
          <input type="text" className="name" placeholder="Your Name" name="email" onChange={this.handleChange}/>
          <input type="text" className="email" placeholder="email address" name="email" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <button type="submit"
                  className="submit-button">Register</button>
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


