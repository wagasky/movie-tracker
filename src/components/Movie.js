import React from 'react';
import { Link } from 'react-router-dom';

const Movie = () => {

  // for displaying individual movies:
  // const displayMovies = movies.map((movie, i) => {
  //   return (
  //     <Link to={`/movies/${movie.id}`} >
  //       <img src={movie.image} key={i} />
  //     </Link>
  //   )
  // })

  // return (
  //   <div>
  //     { displayMovies }
  //   </div>
  // )

  return (
    <div>
      <p>I'm a movie!</p>
    </div>
  )
}

export default Movie;