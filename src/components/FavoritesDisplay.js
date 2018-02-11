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

  async componentDidMount() {
    // const favorites = await this.getFavorites(userId);
    // this.setState({ favorites })
  }

  getFavorites = async () => {
    const userId = this.props.userId;
    const results = await getFavorites(userId);
    const favorites = await results.data;

    return favorites;
  }

// cannot use async/await on a func that goes inside render
// pull favorites on page load an set in state? 
// pull favorites array from state to render?

  renderFaves = () => {
    const favorites = this.getFavorites();
    // debugger
    return !favorites ? <p>No Favorites</p> : <p>Favorites!</p>
  }

  render() {
    return (
      <div>
        { 
          // this.props.userId &&
          // this.renderFaves() 
        }
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  userId: store.current_user.id
})

export default connect(mapStateToProps, null)(FavoritesDisplay);