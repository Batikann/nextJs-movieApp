import FeaturedMovie from '@/components/featured-movies'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

function HomeContainer({
  popularMovies = [],
  selectedCategory,
  nowPlaying = [],
  categories = [],
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * 10) + 1]}
      />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory?.movies?.length > 0 ? (
        <MoviesSection
          title={
            categories?.find((genre) => `${genre?.id}` === selectedCategory?.id)
              ?.name
          }
          movies={selectedCategory?.movies}
        />
      ) : (
        ''
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection title="Your Favorites" movies={nowPlaying.slice(7, 14)} />
    </div>
  )
}
export default HomeContainer
