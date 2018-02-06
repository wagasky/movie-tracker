import apiKey from './apiKey';

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2018-02-06&primary_release_date.lte=2018-03-31/`

export const getMovies = async () => {
  // console.log(url)
  const response = await fetch(url);
  const { results } = await response.json();
  console.log(results)
}