export const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_FAVORITES':
      return action.filter 
    case 'ADD_FAVORITE':
      return action.userId, action.movieId
    default: 
      return state
  }
}