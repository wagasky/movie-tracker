import React, { Component } from 'react';
import { loadMovies, toggleFavorite, showFavorites } from '../actions/index.js';
import { getMovies, getAllUsers } from '../apiCall';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LogIn from '../components/LogIn';
import Register from '../containers/Register';
import Splash from '../components/Splash';
import MoviesDisplay from '../components/MoviesDisplay';
import FavoritesDisplay from '../components/FavoritesDisplay';
import Nav from '../components/Nav';

import './App.css';

class App extends Component {

    // const databaseResults = await getAllUsers();
    // console.log(databaseResults)

  render() {
    return (
      <div className="App">
        { <Nav /> }
        <h1>Movie Tracker</h1>
        <Route exact path='/' component={ MoviesDisplay }/>
        <Route exact path='/login' component={ Splash } />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/favorites' component={ FavoritesDisplay } />
        {/* <MovieDisplay /> */}
      </div>
    );
  }
}

export default App
