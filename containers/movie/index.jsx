import FeaturedMovie from '@/components/featured-movies'

function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />
}
export default MovieContainer
