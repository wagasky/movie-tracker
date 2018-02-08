import React, { Component } from 'react';
import { connect } from 'react-redux';

class movieDisplay extends Component {
  renderedMovies = () => { this.props.movies.map( movie => console.log(movie))}
  
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

export const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(movieDisplay);