export const moviesReducer = (state=[], action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.movies
    case 'TOGGLE_FAVORITE':
      return state.map( movie => (
        movie.id === action.id ? {...movie, favorite: !movie.favorite} : movie))
    case 'ADD_FAVORITE':
      return 
    default: 
      return state
  }
}