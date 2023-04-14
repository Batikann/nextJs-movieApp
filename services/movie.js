const API_URL = 'https://api.themoviedb.org/3/'

const fetchMovieApi = async (pathName, query = '') => {
  try {
    const res = await fetch(`
  ${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query}`)

    return res.json()
  } catch (error) {
    throw new Error(error)
  }
}

const getSingleCategories = async (genreId) => {
  return fetchMovieApi('discover/movie', `with_genres=${genreId}`)
}

const getCategories = async () => {
  return fetchMovieApi('genre/movie/list', 'language=en-US')
}

const getPopularMovies = async () => {
  return fetchMovieApi('movie/popular')
}

const getNowPlaying = async () => {
  return fetchMovieApi('movie/now_playing')
}

const getMovieDetails = async (movieId) => {
  return fetchMovieApi(`movie/${movieId}`)
}

export {
  fetchMovieApi,
  getSingleCategories,
  getCategories,
  getPopularMovies,
  getNowPlaying,
  getMovieDetails,
}
