import React, { Component } from 'react';
import { loadMovies, toggleFavorite, showFavorites } from '../actions/index.js';
import { getMovies } from '../apiCall';
import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  async componentDidMount() {
    const results = await getMovies();
    this.props.loadMovies(results)
  }

  render() {
    return (
      <div className="App">
        <p>Movie Tracker</p>
        { <LogIn /> }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
