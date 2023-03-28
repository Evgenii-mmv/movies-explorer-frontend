import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, savedMovies}) {

  return (
    <section className="movies">
      <div className="movies__container--all"></div>
        <div className='movies__list'>
          {movies.map(movie => <MoviesCard savedMovies={savedMovies} movie={movie} key={movie.id} />)}
        </div>
    </section>
  )
}

export default MoviesCardList;