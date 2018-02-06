import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
})

export default rootReducer;