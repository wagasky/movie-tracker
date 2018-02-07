export const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_FAVORITES':
      return action.filter 
    default: 
      return state
  }
}
