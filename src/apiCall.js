import apiKey from './apiKey';

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`

export const getMovies = async () => {
  const response = await fetch(url);
  const { results } = await response.json();

  return results;
}

//this will be a get 
export const getAllUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users')
  
  const { results } = await response.json();

  return results;
}

//this will be a post 
export const userSignIn = async (email, password) => {
  const response = await fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  const jsonResponse = await response.json();

// was results - I changed to jsonResponse
  return jsonResponse;
}

export const addNewUser = async () => {
  const response = await fetch('http://localhost:3001/api/users/new');
  const { results } = await response.json();

  return results;
}

export const addFavorite = async () => {
  const response = await fetch('http://localhost:3001/api/users/favorites/new');
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