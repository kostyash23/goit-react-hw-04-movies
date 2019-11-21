import axios from 'axios';

const KEY = '04cb9f1be532535b42e85e3384d1506e';

export const fetchTrandingMovies = () =>
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);

export const searchMovies = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`,
  );
export const MoviesId = id =>
  axios.get(`
https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`);

export const reviewsInfo = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );

export const craditsInfo = id =>
  axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`);
