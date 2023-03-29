import galochka from '../../images/Galo4ka.svg';
import krestik from '../../images/Krestik.svg';

function MoviesCard({ movie, onRemoveFilm, onButtonSaveClick, saved }) {
  return (
    <div className='movies__card'>
      <div className='movies__text'>
        <p className='movies__name'>{movie.nameRU}</p>
        <p className='movies__time'>{movie.duration} минут</p>
      </div>
      {saved ? (
        <>
          <a href={movie.trailerLink} target='_blank' rel="noreferrer">
            <img src={movie.image} className='movies__image' alt='Обложка фильма' />
          </a>
          <button className='button movies__button' onClick={() => onRemoveFilm(movie._id)}>
            <img src={krestik} alt='' />
          </button>
        </>
      ) : (
        <>
          <a href={movie.trailerLink} target='_blank' rel="noreferrer">
            <img src={'https://api.nomoreparties.co/'+ movie.image.url} className='movies__image' alt='Обложка фильма' />
          </a>
          <button
            className={`button movies__button ${movie.isSave ? 'movies__button--active' : ''}`}
            onClick={() => onButtonSaveClick(movie)}
          >
            {movie.isSave ? (<img src={galochka} alt='' />) : 'Сохранить'}
        </button>
        </>
      )}
    </div>
  )
}

export default MoviesCard;