import React, {Component} from 'react';
import { Link, redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/index';
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
               onClick={this.addFavorite} />
        </div>
      </div>
    )
  }

  addFavorite = () => {

    if(!this.props.current_user) {
      this.props.history.push('/login')
    } else {
      console.log('add to favorites')
    }
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
      <div className="movie">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));