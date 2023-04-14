import HomeContainer from '@/containers/home'
import {
  getSingleCategories,
  getCategories,
  getPopularMovies,
  getNowPlaying,
} from '@/services/movie'

async function HomePage({ params }) {
  let selectedCategory

  const [
    { results: popularMovies },
    { results: nowPlaying },
    { genres: categories },
  ] = await Promise.all([getPopularMovies(), getNowPlaying(), getCategories()])

  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0])
    selectedCategory = results
  }
  return (
    <HomeContainer
      popularMovies={popularMovies}
      nowPlaying={nowPlaying}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  )
}

export default HomePage
