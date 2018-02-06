const filterReducer = (state='SHOW_ALL', action) => {
  switch(action.type) {
    case 'SHOW_FAVORITES':
      return action.filter 
    default: 
      return state
  }
}

export default filterReducer;