import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/index';

class Movie extends Component {


  renderMovie = () => {
    const posterPath = this.props.poster; 

    return (
      <div>
        <img onClick={this.handleFavorite} 
        src={ posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null }
        />
        <h3>Title: {this.props.title}</h3>
        <p>Release Date: {this.props.releaseDate}</p>
        <p>Popularity: {this.props.rating}%</p>
        <p>Overview: {this.props.overview}</p>
      </div>
    )
  }

  handleFavorite = () => {   
    this.props.toggleFavorite(this.props.id);
    this.addToFavoritesArray();
  }

  // we're going to want to separate functions
  // I don't think we'll want them in this file - maybe the reducer?

  // addFavorite = (movieId) => {
  //   const favorites = this.props.favorite;
  //   const movies = this.props.movies
  //   const newFavorite = favorites.find( movie => {
  //     if (!movieId) {
  //       return this.props.movies.id
  //     }
  //   }
  //   const updatedFavorites = [...favorites, newFavorite]

  //   return updatedFavorites;
  // }

  // removeFavorite = (movieId) => {
  //   const favorites = this.props.favorite;
  //   const updatedFavorites = favorites.filter(movie => movie.id !== action.movie.id);
  //   return updatedFavorites;
  // }

  // our old favorites function below

  addToFavoritesArray = (movieId) => {
    console.log('favorites was clicked', movieId)
    // const favorites = this.props.favorite;
    // const movies = this.props.movies
    // const updatedFavorites = favorites.filter( movie => {
  }


  // for displaying individual movies:
  // const displayMovies = movies.map((movie, i) => {
  //   return (
  //     <Link to={`/movies/${movie.id}`} >
  //       <img src={movie.image} key={i} />
  //     </Link>
  //   )
  // })


  render() {
    return (
      <div>
        { this.renderMovie() }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  movies: store.movies, 
  favorite: store.favorite,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: movieId => dispatch(toggleFavorite(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);