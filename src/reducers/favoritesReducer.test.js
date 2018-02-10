/* eslint-disable */

import favoritesReducer from './favoritesReducer';
import * as actions from '../actions';
import mockData from '../mockData';

Describe('favoritesReducer', () => {

  it('should return the default state', () => {
    const expected = [];

    expect(favoritesReducer(undefined, {})).toEqual(expected)
  })

  it('should return the state with an array of movies', () => {
    const userId = 1;
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
    expect(favoritesReducer(undefined, actions.showFavorites(userId))).toEqual(expected)
  })
})