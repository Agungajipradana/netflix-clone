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

export const getMovieUpcomingList = async () => {
  try {
    const movieUpcoming = await axios.get(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`);
    // console.log(movieUpcoming);
    return movieUpcoming.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieUpcomingList());

export const getMovieByGenreActionList = async () => {
  try {
    const movieByGenreAction = await axios.get(`${baseUrl}/discover/movie?page=1&api_key=${apiKey}&with_genres=28`);
    // console.log(movieByGenreAction);
    return movieByGenreAction.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieByGenreActionList());

export const getMovieByGenreHorrorList = async () => {
  try {
    const movieByGenreHorror = await axios.get(`${baseUrl}/discover/movie?page=1&api_key=${apiKey}&with_genres=27`);
    // console.log(movieByGenreHorror);
    return movieByGenreHorror.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieByGenreHorrorList());

export const getMovieByGenreComedyList = async () => {
  try {
    const movieByGenreComedy = await axios.get(`${baseUrl}/discover/movie?page=1&api_key=${apiKey}&with_genres=35`);
    // console.log(movieByGenreComedy);
    return movieByGenreComedy.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getMovieByGenreComedyList());

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

export const getSeriesTopRatedList = async () => {
  try {
    const seriesTopRated = await axios.get(`${baseUrl}/tv/top_rated?page=1&api_key=${apiKey}`);
    // console.log(seriesTopRated);
    return seriesTopRated.data.results;
  } catch (error) {
    throw error;
  }
};

// console.log(getSeriesTopRatedList());
