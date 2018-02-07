export const favoriteReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOAD_FAVORITES':
      return action.filter 
    default: 
      return state
  }
}
