import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';


const MoviesDisplay = () => {

  return (
    <div>
      <p>I'm the all the movies!</p>
      <Movie />
    </div>
  )
}

export default MoviesDisplay;