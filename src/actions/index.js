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

// These are going to be the primary actions

// export const setFavorites = (favorites) => ({
//   type: 'SET_FAVORITES',
//   favorites
// })

// export const resetFavorites = () => ({
//   type: 'RESET_FAVORITES'
// })

// these are going to be asynchronous calls to post the favorites

// export const removeFavorite = (userId, movieId) => async (dispatch) => {
//   await postRemoveFavorite(userId, movieId);
//   dispatch(showFavorites(userId))
// }

// export const addFavorite = (userId, movieId) => async (dispatch) => {
  // await postAddFavorite(userId, movieId);
  // dispatch(showFavorites(userId))
// }

// export const showFavorites = (userId) => async (dispatch) => {
  //   const favorites = await fetchFavorites(userId);
  //   dispatch(showFavorites(favorites.data))
// }


// this one below will go away

export const showFavorites = (filter) => ({
  type: 'SHOW_FAVORITES',
  filter
  //we would pass in the user id 
})

