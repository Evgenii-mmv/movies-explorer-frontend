function MoviesCard({ movie, onRemoveFilm }) {

  return (
    <div className='movies__card'>
      <div className='movies__text'>
        <p className='movies__name'>{movie.nameRU}</p>
        <p className='movies__time'>{movie.duration} минут</p>
      </div>
      <a href={movie.trailerLink} target='_blank' ><img src={'https://api.nomoreparties.co/'+ movie.image.url} className='movies__image' alt='Обложка фильма'></img></a>
      {saved ? (
        <button className='button movies__button' onClick={() => handleButtonClick(
          movie.country,
          movie.director,
          movie.duration,
          movie.year,
          movie.description,
          movie.image.url,
          movie.trailerLink,
          movie.image.formats.thumbnail.url,
          movie.id,
          movie.nameRU,
          movie.nameEN,
        )}>
          <img src={krestik} alt=''></img>
        </button>
      ) : (
        <button
          className={`button movies__button ${isSave ? 'movies__button--active' : ''}`}
          onClick={() => handleButtonClick(
            movie.country,
            movie.director,
            movie.duration,
            movie.year,
            movie.description,
            movie.image.url,
            movie.trailerLink,
            movie.image.formats.thumbnail.url,
            movie.id,
            movie.nameRU,
            movie.nameEN,
          )}
        >
          <img src={isSave ? galochka : ''} alt=''></img>
          {isSave ? '' : 'Сохранить'}
        </button>
      )}
    </div>
  )
}

export default MoviesCard;