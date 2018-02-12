import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer/moviesReducer';
import { favoritesReducer } from './favoritesReducer/favoritesReducer';
import { loginsReducer } from './loginsReducer/loginsReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  favorite: favoritesReducer,
  current_user: loginsReducer,
})
