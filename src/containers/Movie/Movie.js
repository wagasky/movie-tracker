import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, getFavorites, deleteFavorites } from '../../helper/apiCall.js';
import iconInactive from '../../assets/like.png';
import iconActive from '../../assets/like-active.png';
import './Movie.css';

export class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: this.props.favorite
    }
  }

  setIcon = () => {
    if(this.state.favorite) {
      return iconActive;
    } else {
      return iconInactive;
    }
  }

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
          <img src={ this.setIcon() }
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

      this.setState({ favorite: false })
      return deleteFavorites(userId, movieId)
    } else {
      this.setState({ favorite: true })
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
  current_user: store.current_user,
})

export default withRouter(connect(mapStateToProps, null)(Movie));