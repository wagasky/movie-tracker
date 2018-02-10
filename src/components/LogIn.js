import React, { Component } from 'react';
import { userSignIn } from '../apiCall';
import { connect } from 'react-redux';
import { setUser, logOutUser } from '../actions/index';
import * as actions from '../actions/index'

class LogIn extends Component {
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

  handleSubmit = async (e) => {

    e.preventDefault();

    const results = await userSignIn(this.state.email, this.state.password);
    const user = await results.data
    this.props.setUser(user)

    
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

export const mapStateToProps = (store) => ({
  user: store.user
  // userId: store.user.id
})

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  // logOutUser: (userId) => dispatch(setUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)





