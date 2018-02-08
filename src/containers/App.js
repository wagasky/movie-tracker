import React, { Component } from 'react';
import { loadMovies, toggleFavorite, showFavorites } from '../actions/index.js';
import { getMovies, getDatabaseInfo } from '../apiCall';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LogIn from '../components/LogIn';
import Splash from '../components/Splash';
import MoviesDisplay from '../components/MoviesDisplay';
import FavoritesDisplay from '../components/FavoritesDisplay';
import Nav from '../components/Nav';

import './App.css';

class App extends Component {
  async componentDidMount() {
    const results = await getMovies();
    this.props.loadMovies(results)

    const databaseResults = await getDatabaseInfo();
    console.log(databaseResults)
  }

  render() {
    return (
      <div className="App">
        { <Nav /> }
        <p>Movie Tracker</p>
        <Route exact path='/' component={ MoviesDisplay }/>
        <Route exact path='/login' component={ Splash } />
        <Route exact path='/favorites' component={ FavoritesDisplay } />
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  movies: store.movies
})

export const mapDispatchToProps = (dispatch) => ({
  handleClick: id => dispatch(toggleFavorite(id)),
  loadMovies: movies => dispatch(loadMovies(movies)),
  showFavorites: filter => dispatch(showFavorites(filter))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
