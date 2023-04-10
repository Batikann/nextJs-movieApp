import MovieContainer from '@/containers/movie'
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation'

function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id === parseInt(params.id)
  )
  if (!movieDetail) {
    notFound()
  }
  return <MovieContainer movie={movieDetail} />
}
export default MoviePage
