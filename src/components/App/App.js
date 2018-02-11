import React, { Component } from 'react';
import { loadMovies, toggleFavorite, showFavorites } from '../../actions/index.js';
import { getMovies, getAllUsers } from '../../helper/apiCall';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import Splash from '../../components/Splash/Splash';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import FavoritesDisplay from '../FavoritesDisplay/FavoritesDisplay';
import Nav from '../Nav/Nav';

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
        <Route exact path='/register' component={ Splash } />
        <Route exact path='/favorites' component={ FavoritesDisplay } />
      </div>
    );
  }
}

export default App
