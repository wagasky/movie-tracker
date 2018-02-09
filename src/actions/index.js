export const loadMovies = (movies) => ({
  type: 'LOAD_MOVIES',
  movies
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const addFavorite = (userId, movieId) => ({
  type: 'ADD_FAVORITE',
  userId,
  movieId
})

export const showFavorites = (filter) => ({
  type: 'SHOW_FAVORITES',
  filter
  //we would pass in the user id 
})

export const setCurrentUser = (userId) => ({
  type: 'SET_CURRENT_USER',
  userId
})

