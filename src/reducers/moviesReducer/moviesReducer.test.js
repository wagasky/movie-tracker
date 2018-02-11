/* eslint-disable */

import moviesReducer from './moviesReducer';
import * as actions from '../../actions';
import mockData from '../../mockData';

describe('moviesReducer', () => {

  it('should return the default state', () => {
    const expected = [];

    expect(moviesReducer(undefined, {})).toEqual(expected)
  })

  it('should return the state with an array of movies', () => {
    const expected = mockData;

    expect(moviesReducer(undefined, actions.loadMovies(movies))).toEqual(expected)
  })

  it('should return the state with favorite set to true', () => {
    const currentState = mockData;
    const id = 337167;
    const expected = [
      {
        "vote_count": 20,
        "id": 337167,
        "video": false,
        "vote_average": 6.4,
        "title": "Fifty Shades Freed",
        "popularity": 45.670468,
        "poster_path": "/iUDFe6B6bFPOAE13uoqH4eEU1cF.jpg",
        "original_language": "en",
        "original_title": "Fifty Shades Freed",
        "genre_ids": [18, 10749],
        "backdrop_path": "/iuyE1qy9HoTsMg0DHB1KJxM94DJ.jpg",
        "adult": false,
        "overview": "The third installment of the Fifty Shades Trilogy.",
        "release_date": "2018-02-07",
        "favorite": true
      }
    ];
    
    expect(moviesReducer(currentState, actions.toggleFavorite(id))).toEqual(expected);
  })
})
