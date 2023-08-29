import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || " ";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL || " ";

export const getMovieList = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    console.log(movie);
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
    console.log(movieAllPage);
    return movieAllPage.data.results;
  } catch (error) {
    throw error;
  }
};

console.log(getMovieListAllPage());
