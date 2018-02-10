import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    const { name, email, password } = this.state

    e.preventDefault();
    const results = await addNewUser({ name, email, password });
    const userResults = await userSignIn(email, password);

    const user = await userResults.data

    this.autoLogIn(user)


    // save for later - set current_user as recently registered user 
    // to save user a step
    // const user = await userResults.data
    // this.props.setUser(user)
  }

  autoLogIn = async (user) => {
    const { email, password } = user

    const results = await userSignIn(email, password);
    const userData = await results.data
    this.props.setUser(userData)

  }

  render() {
    return (
      <div className="log-in-form">
        <form onSubmit={this.registerSubmit}>
          <input type="text" className="name" placeholder="Your Name" name="email" onChange={this.handleChange}/>
          <input type="text" className="email" placeholder="email address" name="email" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addNewUser: (user) => dispatch(addNewUser(user)),
  setUser: (user) => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Register)


