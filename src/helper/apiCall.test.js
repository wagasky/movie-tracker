import mockData from '../mockData';
import apiKey from './apiKey';
import { getMovies } from './apiCall';

/* eslint-disable */

describe('fetch movie data', () => {
  beforeEach(() => {
    const mockMovies = mockData;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMovies)
      })
    })
  });

  it('should fetch with the correct params', () => {
    const expected = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`;
    
    getMovies();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a movie array', async () => {
    expect(await getMovies()).toEqual(mockMovies);
  });

  it('should return an error message if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 500,
        json: () => Promise.resolve('Error fetching movies')
      })
    })

    expect(getMovies()).toEqual('Error fetching movies');
  });
})

describe('fetch favorites data', () => {
  beforeEach(() => {
    const mockMovies = mockData;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMovies)
      })
    })
  });

  it('should fetch with the correct params', () => {
    const expected = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`;
    
    getFavorites();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a movie array', async () => {
    expect(await getFavorites()).toEqual(mockMovies);
  });

  it('should return an error message if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 500,
        json: () => Promise.resolve('Error fetching movies')
      })
    })

    expect(getFavorites()).toEqual('Error fetching movies');
  });
})