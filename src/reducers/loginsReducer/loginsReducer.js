export const loginsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER': 
      return { ...action.user }
    case 'LOG_OUT_USER':
      return {}
    default:
      return state
  }
}