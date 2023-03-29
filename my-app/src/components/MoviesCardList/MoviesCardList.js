import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, onButtonSaveClick}) {

  return (
    <section className="movies">
      <div className="movies__container--all"></div>
        <div className='movies__list'>
          {movies.map(movie => <MoviesCard onButtonSaveClick={onButtonSaveClick} movie={movie} key={movie.id} />)}
        </div>
    </section>
  )
}

export default MoviesCardList;