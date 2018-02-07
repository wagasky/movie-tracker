import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  favorite: favoriteReducer,
})
