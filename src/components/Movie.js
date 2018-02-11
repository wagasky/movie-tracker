import React, {Component} from 'react';
import { Link, redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/index';
import { addFavorite, getFavorites, deleteFavorites } from '../apiCall.js';
import icon from '../like.png';
import './Movie.css';

class Movie extends Component {
  renderMovie = () => {
    const posterPath = this.props.poster; 
    const url = `https://image.tmdb.org/t/p/w500${ posterPath }`
    const backgroundImage = {
      backgroundImage: `url(${ url })`
    }

    return (
      <div className="full">
        <div className="background" style={ backgroundImage }>
        </div>
        <div className="description" >
          <h3>Title: { this.props.title }</h3>
          <p>Release Date: { this.props.releaseDate }</p>
          <p>Popularity: { this.props.rating } %</p>
          <p>Overview: { this.props.overview }</p>
          <img src={ icon }
               alt="favorite button" 
               className="favorite-icon" 
               onClick={ this.favoriteHandler } />
        </div>
      </div>
    )
  }

  checkFavorite = async (userId, movie) => {
    const { data } = await getFavorites(userId);
    const match = data.find( favorite => {
      return (movie.id === favorite.movie_id) ||
             (movie.id === favorite.id)
    })

    if (match) {
      const movieId = match.movie_id;

      return deleteFavorites(userId, movieId)
    } else {
      return addFavorite(userId, movie)
    }
  }

  favoriteHandler = () => {
    if(this.props.current_user.id) {
      const userId = this.props.current_user.id;
      const movie = this.props;

      this.checkFavorite(userId, movie);
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="movie">
        { this.renderMovie() }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  movies: store.movies, 
  favorite: store.favorite,
  current_user: store.current_user,
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: movieId => dispatch(toggleFavorite(movieId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));



  // for displaying individual movies:
  // const displayMovies = movies.map((movie, i) => {
  //   return (
  //     <Link to={`/movies/${movie.id}`} >
  //       <img src={movie.image} key={i} />
  //     </Link>
  //   )
  // })