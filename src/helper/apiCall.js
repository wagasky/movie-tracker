import apiKey from './apiKey';

export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`;

  try {
    const response = await fetch(url);
    const { results } = await response.json();

    return results;
  } catch (error) {
    throw Error;
  }
};

export const userSignIn = async (email, password) => {
  try {
    const response = await fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const { data } = await response.json();

    return data;
  } catch (error) {
    throw Error;
  }
};

export const addNewUser = async (user) => {
  try {
    const response = await fetch('api/users/new', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const results = await response.json();

    return results;
  } catch (error) {
    throw Error;
  }

};

export const addFavorite = async (user_id, movie) => {
  const payLoad = {
        movie_id: movie.id,
        user_id: user_id,
        title: movie.title,
        poster_path: movie.poster,
        release_date: movie.releaseDate,
        vote_average: movie.rating,
        overview: movie.overview
      }

  try {  
    const response = await fetch('api/users/favorites/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payLoad)
    });
  
    const results = await response.json();

    return results;
  } catch (error) {
    throw Error;
  }

};

export const getFavorites = async (id) => {
  try {
    const response = await fetch(`api/users/${id}/favorites`);
    const results = await response.json();

    return results;
  } catch (error) {
    throw Error;
  }
};

export const deleteFavorites = async (userId, movieId) => {
  try {
    const response = await fetch(`api/users/${userId}/favorites/${movieId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      user_id: userId,
      movie_id: movieId
    })
  });
  const results = await response.json();

  return results;
  } catch (error) {
    throw Error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch('api/users');
    const { results } = await response.json();

    return results;
  } catch (error) {
    throw Error;
  }
};