const moviesReducer = (state=[], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.movies
    case 'TOGGLE_FAVORITE':
      return state.map( movie => (
        movie.id === action.id ? {...movie, favorite: !movie.favorite} : movie}
    default: 
      return state
  }
}

export default moviesReducer;