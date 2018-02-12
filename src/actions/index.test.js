/* eslint-disable */

import * as actions from './index';
import mockData from '../mockData';

describe.only('all actions', () => {

  it('should return a type of LOAD_MOVIES, with movies', () => {
    const movies = mockData;

    const expected = {
      type: 'LOAD_MOVIES',
      movies
    }

    expect(actions.loadMovies(movies)).toEqual(expected);
  })

  it('should return a type of TOGGLE_FAVORITE, with an id', () => {
    const id = 0;
    const expected = {
      type: 'TOGGLE_FAVORITE',
      id
    }

    expect(actions.toggleFavorite(id)).toEqual(expected);
  })

  it('should return a type of ADD_FAVORITE, with a userId and movieID', () => {
    const userId = 0;
    const movieId = 0
    const expected = {
      type: 'ADD_FAVORITE',
      userId,
      movieId
    }

    expect(actions.addFavorite(userId, movieId)).toEqual(expected);
  })

  it('should return a type of SHOW_FAVORITES, with a filter', () => {
    const filter = 'userId';
    const expected = {
      type: 'SHOW_FAVORITES',
      filter
    }

    expect(actions.showFavorites(filter)).toEqual(expected)
  })

  it('should return a type of SET_USER, with a user', () => {
    const user = {};
    const expected = {
      type: 'SET_USER',
      user
    }

    expect(actions.setUser(user)).toEqual(expected)
  })

  it('should return a type of LOG_OUT_USER, with a user', () => {
    const user = {};
    const expected = {
      type: 'LOG_OUT_USER',
      user
    }

    expect(actions.logOutUser(user)).toEqual(expected)
  })

  it('should return a type of ADD_NEW_USER, with a name, email, and password', () => {
    const userName = '';
    const userEmail = '';
    const userPassword = '';
    const expected = {
      type: 'ADD_NEW_USER',
      userName,
      userEmail,
      userPassword
    }

    expect(actions.addNewUser(userName, userEmail, userPassword)).toEqual(expected)
  })
})