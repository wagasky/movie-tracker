import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/index';
import { NavLink, withRouter } from 'react-router-dom';
import './Nav.css';
import PropTypes from 'prop-types';

export class Nav extends Component {

  logOutUser = (user) => {
    this.props.logOutUser(user);
    this.props.history.push('/')
  }

  render() {

    if (this.props.user.name) {
     return (
        <div>
          <nav className='nav-menu'> 
            <NavLink to='/' className='nav'>All Movies</NavLink>
            <NavLink to='/favorites' className='nav'>Favorites</NavLink>
            <button className='logout-button' onClick={this.logOutUser}>Logout</button>
          </nav>
        </div>
        )
      }

    return (
      <div>
        <nav className='nav-menu'> 
          <NavLink to='/' className='nav'>All Movies</NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
          <NavLink to='/login' className='nav'>Login</NavLink>
        </nav>
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  user: store.current_user
})

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user))
})

Nav.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
  logOutUser: PropTypes.func,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));