import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { setUser } from '../../actions/index';
import { userSignIn, addNewUser } from '../../helper/apiCall';
import PropTypes from 'prop-types';

export class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      name: '',
      email: '',
      password: '',
      errorMessage: null,
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
    this.updateMessage(results)
  }

  updateMessage = async (results) => {
    if(results.status !== 'success') {
      this.setState({errorMessage: "That email is already registered. Please try again or login."})
    } else {
      this.autoSignIn();
    }
  }

  autoSignIn = async () => {
    const userEmail = this.state.email;
    const userPassword = this.state.password;

    const userResults = await userSignIn(userEmail, userPassword);
    const user = await userResults.data; 
    this.props.setUser(user)
    this.props.history.push('/')
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

Register.propTypes = {
  history: PropTypes.object,
  addNewUser: PropTypes.func,
  setUser: PropTypes.func,
  user: PropTypes.object,
  registerSubmit: PropTypes.func,
  updateMessage: PropTypes.func,
  autoSignIn: PropTypes.func,
}

export default withRouter(connect(null, mapDispatchToProps)(Register));