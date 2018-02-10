import apiKey from './apiKey';
import { cleanedResults } from './helper';

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`;

export const getMovies = async () => {
  const response = await fetch(url);
  const { results } = await response.json();

  return cleanedResults(results);
};

export const getAllUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users');
  const { results } = await response.json();

  return results;
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

    const results = await response.json();
    return results;

  } catch (error) {
    return false;
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

    return await response.json();
  } catch (error) {
    return false;
  }

};

export const addFavorite = async (user_id, movie) => {
  const payLoad = {
        movie_id: movie.id,
        user_id: user_id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
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
debugger;
    return results;

  } 
  catch (error) {
    return false;
  }

};

export const getFavorites = async (id) => {
  const response = await fetch(`api/users/${id}/favorites`);
  const results = await response.json();

  return results;
};

export const deleteFavorites = async (userId, movieId) => {
  const response = await fetch(`api/users/${userId}/favorites/${movieId}`);
  const { results } = await response.json();

  return results;
};