import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/index';

class Movie extends Component {

  renderMovie = () => {
    const posterPath = this.props.poster;
    console.log(posterPath)
     return <img onClick={this.handleFavorite} src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
  }

  handleFavorite = () => {
    this.props.toggleFavorite(this.props.id)
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
  movies: store.movies
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: movieId => dispatch(toggleFavorite(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);