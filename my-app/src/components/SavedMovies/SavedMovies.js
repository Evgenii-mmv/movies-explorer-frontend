import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {

  return (
    <>
    <SearchForm/>
    <section className="movies">
        <div className="movies__container--saved"></div>
          <div className='movies__list'>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
          </div>
      </section>
    </>
    )
}

export default SavedMovies;