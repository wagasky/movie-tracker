import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/index';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {

  logOutUser = (user) => {
    this.props.logOutUser(user);
  }

  render() {
    return (
      <div>
        <nav> 
          <NavLink to='/' className='nav'>All Movies</NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
          <NavLink to='/login' className='nav'>Login</NavLink>
          <button onClick={this.logOutUser}>Logout</button>
        </nav>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user))
})

export default connect(null, mapDispatchToProps)(Nav);