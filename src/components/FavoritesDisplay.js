import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie'


const FavoritesDisplay = () => {

  return (
    <div>
      <p>I'm the favorites!</p>
      <Movie />
    </div>
  )
}

export default FavoritesDisplay;