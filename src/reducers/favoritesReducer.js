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

// once we have our calls:

// export const favoritesReducer = (state=[], action) => {
//   switch(action.type) {
//     case 'SET_FAVORITES':
//       return action.favorites; 
//     case 'RESET_FAVORITES':
//       return [];
//     default: 
//       return state;
//   }
// }