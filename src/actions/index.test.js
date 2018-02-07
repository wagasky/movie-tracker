import * as actions from './index';
import mockData from '../mockData';

describe('all actions', () => {

  it('should return a type of LOAD_MOVIES, with movies', () => {
    const movies = mockData;

    const expected = {
      type: 'LOAD_MOVIES',
      movies
    }

    expect(actions.loadMovies(movies)).toEqual(expected)
  })

  it('should return a type of TOGGLE_FAVORITE, with an id', () => {
    const id = 0;
    const expected = {
      type: 'TOGGLE_FAVORITE',
      id
    }

    expect(actions.toggleFavorite(id)).toEqual(expected)
  })

  it('should return a type of SHOW_FAVORITES, with a filter', () => {
    const filter = 'userId';
    const expected = {
      type: 'SHOW_FAVORITES',
      filter
    }

    expect(actions.showFavorites(filter)).toEqual(expected)
  })
})