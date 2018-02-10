export const cleanedResults = (results) => {
  const movieData = results.map( movie => Object.assign(movie, {favorite: false}));

  return movieData;
};
