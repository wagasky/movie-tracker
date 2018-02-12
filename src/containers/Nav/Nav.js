import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/index';
import { Link, NavLink, withRouter } from 'react-router-dom';

export class Nav extends Component {
  logOutUser = (user) => {
    this.props.logOutUser(user);
    this.props.history.push('/')
  }

  render() {

    if (this.props.user.name) {
     return (
        <div>
          <nav> 
            <NavLink to='/' className='nav'>All Movies</NavLink>
            <NavLink to='/favorites' className='nav'>Favorites</NavLink>
            <button onClick={this.logOutUser}>Logout</button>
          </nav>
        </div>
        )
      }

    return (
      <div>
        <nav> 
          <NavLink to='/' className='nav'>All Movies</NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
          <NavLink to='/login' className='nav'>Login</NavLink>
        </nav>
      </div>
    )
  }
}

// route register to splash later

export const mapStateToProps = (store) => ({
  user: store.current_user
})

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));