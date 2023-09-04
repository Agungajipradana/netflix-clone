import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || " ";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL || " ";

export const getMovieList = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    // console.log(movie);
    return movie.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieList());

export const getGenreMovieList = async () => {
  try {
    const genre = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
    // console.log(genre);
    return genre.data.genres;
  } catch (error) {
    throw error;
  }
};

// console.log(getGenreMovieList());

export const getMovieListAllPage = async () => {
  try {
    const movieAllPage = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    // console.log(movieAllPage);
    return movieAllPage.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieListAllPage());

export const getMovieTopRatedList = async () => {
  try {
    const movieTopRated = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`);
    // console.log(movieTopRated);
    return movieTopRated.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieTopRatedList());

export const getMovieNowPlayingList = async () => {
  try {
    const movieNowPlaying = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`);
    // console.log(movieNowPlaying);
    return movieNowPlaying.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieNowPlayingList());

export const getSeriesPopularList = async () => {
  try {
    const seriesPopular = await axios.get(`${baseUrl}/tv/popular?page=1&api_key=${apiKey}`);
    // console.log(seriesPopular);
    return seriesPopular.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getSeriesPopularList());
