import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/index';

class Movie extends Component {



  renderMovie = () => {
    const posterPath = this.props.poster; 
    return <img onClick={this.handleFavorite} src={ posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null }/>

  }

  handleFavorite = () => {   
    this.props.toggleFavorite(this.props.id);
    this.addToFavoritesArray();

  }

  addToFavoritesArray = () => {
    const movies = this.props.movies;
    const favorites = movies.filter( movie => movie.favorite === true);

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
        <p>I'm a movie!</p>
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