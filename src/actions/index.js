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
})

export const setUser = (user) => ({
  type: 'SET_USER',
  user
})

export const logOutUser = (user) => ({
  type: 'LOG_OUT_USER',
  user
})

export const addNewUser = (userName, userEmail, userPassword) => ({
  type: 'ADD_NEW_USER',
  userName,
  userEmail,
  userPassword
})