import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Splash from '../../components/Splash/Splash';
import MoviesDisplay from '../../containers/MoviesDisplay/MoviesDisplay';
import FavoritesDisplay from '../../containers/FavoritesDisplay/FavoritesDisplay';
import Nav from '../../containers/Nav/Nav';


import './App.css';

class App extends Component {
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

export default App;