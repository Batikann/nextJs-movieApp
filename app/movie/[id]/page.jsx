import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
import { getMovieDetails } from '@/services/movie'

async function MoviePage({ params }) {
  const movieDetail = await getMovieDetails(params.id)
  if (!movieDetail) {
    notFound()
  }
  return <MovieContainer movie={movieDetail} />
}
export default MoviePage
