import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { favoritesReducer } from './favoritesReducer';
import { loginsReducer } from './loginsReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  favorite: favoritesReducer,
  current_user: loginsReducer,
})
