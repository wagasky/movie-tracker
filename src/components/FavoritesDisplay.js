import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFavorites } from '../apiCall';
import Movie from './Movie';

class FavoritesDisplay extends Component {
  constructor() {
    super();

    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    // this.loadFavorites();
  }

  loadFavorites = async () => {
    const userId = this.props.userId;
    const results = await getFavorites(userId);
    const favorites = await results.data;

    return favorites;
    // this.renderFavorites(favorites);
  }


  renderFavorites = () => {
    const favorites = this.loadFavorites();
    return favorites.map( movie => {
      return (
        <Movie key={ movie.id }
               poster={ movie.poster_path }
               title={ movie.title }
               rating={ movie.popularity }
               overview={ movie.overview }
               releaseDate={ movie.release_date }
               id={ movie.id } />
      ) 
    })
    // return !favorites ? <p>No Favorites</p> : <p>Favorites!</p>
  }

  render() {
    return (
      <div>
        { 
          this.props.userId &&
          this.renderFavorites() 
        }
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  userId: store.current_user.id
})

export default connect(mapStateToProps, null)(FavoritesDisplay);