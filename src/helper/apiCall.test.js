import { mockData } from '../mockData';
import apiKey from './apiKey';
import { getMovies, userSignIn, addNewUser, addFavorite, getFavorites, deleteFavorites, getAllUsers } from './apiCall';

/* eslint-disable */

describe('getMovies', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockData
      })
    }));
  });

  it('should fetch with the correct params', () => {
    const expected = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`;
    
    getMovies();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a movie array', () => {
    expect(getMovies()).resolves.toEqual(mockData);
  });

  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    expect(getMovies()).rejects.toEqual(Error);
  });
});

describe('userSignIn', () => {

  beforeEach(() => {
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        data: mockUser
      })
    }));
  });

  it('should call fetch with the correct params', () => {
    const url = 'api/users';
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: "tman2272@aol.com",
        password: "password"
      })
    }
    const email = "tman2272@aol.com"
    const password = "password"

    userSignIn(email, password);

    expect(window.fetch).toHaveBeenCalledWith(url, init);
  });

  it('should return a user object if user credentials are correct', () => {
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const email = "tman2272@aol.com"
    const password = "password"

    expect(userSignIn(email, password)).resolves.toEqual(mockUser)
  });

  it('should throw an error if user credentials are incorrect', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const email = "tman2272@aol.com"
    const password = "password"

    expect(userSignIn(email, password)).rejects.toEqual(Error);
  }); 
});

describe('addNewUser', () => {

  beforeEach(() => {
    const mockUser = {
      id: 1,
      name: "Taylor",
      password: "password",
      email: "tman2272@aol.com"
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        message: "New user created",
        id: mockUser.id
      })
    }))
  });

  it('should call fetch with the correct params', () => {
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const url = 'api/users/new'
    const init = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mockUser)
    }

    addNewUser(mockUser)

    expect(window.fetch).toHaveBeenCalledWith(url, init)
  });

  it('should return a message and user id on successful registration', () => {
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const expected = {
      message:  "New user created",
      id: 1
    }

    expect(addNewUser(mockUser)).resolves.toEqual(expected);
  });

  it('should throw an error if user cannot be created', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }

    expect(addNewUser(mockUser)).rejects.toEqual(Error)
  })
});

describe('addFavorite', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        message: "Movie was added to favorites",
        id: mockData[0].id
      })
    }))
  })

  it('should call fetch with the correct params', () => {
    const mockUser = {
      id: 1,
      name: "Taylor",
      password: "password",
      email: "tman2272@aol.com"
    }
    const movie = mockData[0]
    const payLoad = {
      movie_id: movie.id,
      user_id: mockUser.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster,
      release_date: movie.releaseDate,
      vote_average: movie.rating,
    }
    const url = 'api/users/favorites/new';
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payLoad)
    }
    
    addFavorite(mockUser.id, movie);

    expect(window.fetch).toHaveBeenCalledWith(url, init)
  });

  it('should return a message and movie id on success', () => {
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const mockMovie = mockData[0];
    const expected = {
      message: "Movie was added to favorites",
      id: mockData[0].id
    }

    expect(addFavorite(mockUser.id, mockMovie)).resolves.toEqual(expected);
  });

  it('should throw an error upon failure', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const mockUser = {
      "id": 1,
      "name": "Taylor",
      "password": "password",
      "email": "tman2272@aol.com"
    }
    const mockMovie = mockData[0];

    expect(addFavorite(mockUser.id, mockMovie)).rejects.toEqual(Error)
  });
});

describe('getFavorites', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        data: mockData
      })
    }))
  })

  it('should call fetch with the correct params', () => {
    const userId = 1;
    const url = `api/users/1/favorites`;

    getFavorites(userId)

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array of favorites', () => {
    const userId = 1;
    const expected = {
      data: mockData
    }

    expect(getFavorites(userId)).resolves.toEqual(expected);
  });

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const userId = 1;

    expect(getFavorites(userId)).rejects.toEqual(Error);
  });
});

describe('deleteFavorites', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        status: "success",
        message: "1 row was deleted."
      })
    }))
  })

  it('should call fetch with the correct params', () => {
    const userId = 1;
    const movieId = mockData[0].id;
    const url = 'api/users/1/favorites/337167';
    const init = {
      method: 'DELETE',
      body: JSON.stringify({
        user_id: userId,
        movie_id: movieId
      })
    }

    deleteFavorites(userId, movieId);

    expect(window.fetch).toHaveBeenCalledWith(url, init);
  });

  it('should return a status object', () => {
    const expected = {
      status: "success",
      message: "1 row was deleted."
    }
    const userId = 1;
    const movieId = mockData[0].id;

    expect(deleteFavorites(userId, movieId)).resolves.toEqual(expected)
  });

  it('should throw an error is fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const userId = 1;
    const movieId = mockData[0].id;

    expect(deleteFavorites(userId, movieId)).rejects.toEqual(Error);
  });
});

describe('getAllUsers', () => {

  beforeEach(() => {
    const mockUser = {
      id: 1,
      name: "Taylor",
      password: "password",
      email: "tman2272@aol.com"
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: [mockUser]
      })
    }));
  })

  it('should call fetch with the correct params', () => {
    const url = 'api/users';

    getAllUsers();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array of users', () => {
    const mockUser = {
      id: 1,
      name: "Taylor",
      password: "password",
      email: "tman2272@aol.com"
    }
    const expected = [mockUser];
    
    expect(getAllUsers()).resolves.toEqual(expected);
  });

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    expect(getAllUsers()).rejects.toEqual(Error);
  })
})