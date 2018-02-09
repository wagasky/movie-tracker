import apiKey from './apiKey';
import { cleanedResults } from './helper'

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`

export const getMovies = async () => {
  const response = await fetch(url);
  const { results } = await response.json();

  return cleanedResults(results);
}

//this will be a get 
export const getAllUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users')
  
  const { results } = await response.json();


  return results;
}

//this will be a post 
export const userSignIn = async (email, password) => {
  console.log(email);
  console.log(password);
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
}

export const addNewUser = async (name, email, password) => {
  const response = await fetch('api/users/new', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });
  const { results } = await response.json();

  return results;
}

export const addFavorite = async (array) => {
  const response = await fetch('api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({

    })
  });
  const { results } = await response.json();

  return results;
}

export const getFavorites = async () => {
  const response = await fetch('http://localhost:3001/api/users/:id/favorites');
  const { results } = await response.json();

  return results;
}

export const deleteFavorites = async () => {
  const response = await fetch('http://localhost:3001/api/users/:id/favorites/:movie_id');
  const { results } = await response.json();

  return results;
}