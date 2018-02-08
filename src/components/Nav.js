import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

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

export default Nav;