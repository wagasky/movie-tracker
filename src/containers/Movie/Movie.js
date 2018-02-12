import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, getFavorites, deleteFavorites } from '../../helper/apiCall.js';
import iconInactive from '../../assets/like.png';
import iconActive from '../../assets/like-active.png';
import './Movie.css';
import PropTypes from 'prop-types';

export class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
    this.setFavoriteState()
  }

  setFavoriteState = async () => {
    const userId = this.props.current_user.id
    const match = await this.findMatch(userId, this.props)

    if (match) {
      this.setState({ favorite: true })
    } else {
      this.setState({ favorite: false })
    }
  }

  findMatch = async (userId, movie) => {
    const { data } = await getFavorites(userId);
    const match = data.find( favorite => {
      return (movie.id === favorite.movie_id) ||
             (movie.id === favorite.id)
    })

    return match
  }

  checkFavorite = async () => {
    const userId = this.props.current_user.id
    const match = await this.findMatch(userId, this.props)

    if (match) {
      const movieId = match.movie_id;

      this.setState({ favorite: false })
      return deleteFavorites(userId, movieId)
    } else {
      this.setState({ favorite: true })
      return addFavorite(userId, this.props)
    }
  }

  favoriteHandler = () => {
    if(this.props.current_user.id) {
      this.checkFavorite();
    } else {
      this.props.history.push('/login');
    }
  }

  setIcon = () => {
    return this.state.favorite ? iconActive : iconInactive
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

Movie.propTypes = {
  history: PropTypes.object,
  setIcon: PropTypes.func,
  renderMovie: PropTypes.func,
  checkFavorite: PropTypes.func,
  favoriteHandler: PropTypes.func,
  movies: PropTypes.array,
  current_user: PropTypes.object
}

export default withRouter(connect(mapStateToProps, null)(Movie));