import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {

  return (
    <>
    <SearchForm/>
    <section className="movies-container">
    <MoviesCardList/>
    <button type="button" className='movies__more button' >Ещё</button>
    </section>
    </>
    )
}

export default Movies;