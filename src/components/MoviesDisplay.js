import React, { Component } from 'react';
import { loadMovies, toggleFavorite, showFavorites } from '../actions/index.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getMovies } from '../apiCall';
import Movie from './Movie';

class movieDisplay extends Component {
  async componentDidMount() {
    const results = await getMovies();
    this.props.loadMovies(results)
  }

  renderedMovies = () => this.props.movies.map( ( movie ) => {
    const rating = Math.round(movie.popularity);

    return (
      <Movie key={ movie.id }
             poster={ movie.poster_path }
             title={ movie.title }
             rating={ rating }
             overview={ movie.overview }
             releaseDate={ movie.release_date }
             id={ movie.id }
             />
    )
  })
  
  render() {
    console.log()
    return (
      <div>
        { this.renderedMovies() }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  movies: store.movies
})

export const mapDispatchToProps = (dispatch) => ({
  loadMovies: movies => dispatch(loadMovies(movies)),
  showFavorites: filter => dispatch(showFavorites(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(movieDisplay);