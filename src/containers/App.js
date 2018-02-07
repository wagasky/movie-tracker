import React, { Component } from 'react';
import { loadMovies, toggleFavorite, showFavorites } from '../actions/index.js';
import { getMovies } from '../apiCall';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    const results = getMovies();
    console.log(results)
    console.log(this.props)
    // this.props.loadMovies(results)
  }

  render() {
    return (
      <div className="App">
        <p>Movie Tracker</p>
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

connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
