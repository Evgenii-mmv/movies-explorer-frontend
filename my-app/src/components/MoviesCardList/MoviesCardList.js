import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList() {

  return (

      <section className="movies">
        <div className="movies__container--all"></div>
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

    )
}

export default MoviesCardList;