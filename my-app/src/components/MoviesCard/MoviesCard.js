import imageSMALL from '../../images/testSMAILL.png';
import galochka from '../../images/Galo4ka.svg';
import krestik from '../../images/Krestik.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, onRemoveFilm, savedMovies }) {
  const [isSave, setIsSave] = useState(false);
  const location = useLocation();
  const [saved, setSaved ] = useState(false);

  useEffect(() => {
    if(location.pathname === '/movies')
    {
      setSaved(false)
    }else if(location.pathname === '/saved-movies'){
      setSaved(true)
    }
  }, [location.pathname]);

  function handleButtonClick(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    savedMovies(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
     );
    setIsSave(true);

  }

  return (
    <div className='movies__card'>
      <div className='movies__text'>
        <p className='movies__name'>{movie.nameRU}</p>
        <p className='movies__time'>{movie.duration} минут</p>
      </div>
      {!saved ? (
        <a href={movie.trailerLink} target='_blank' ><img src={'https://api.nomoreparties.co/'+ movie.image.url} className='movies__image' alt='Обложка фильма'></img></a>
      ) : (
        <a href={movie.trailerLink} target='_blank' ><img src={movie.image} className='movies__image' alt='Обложка фильма'></img></a>
      )}
      {saved ? (
        <button className='button movies__button' onClick={() => onRemoveFilm(
          movie._id,
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
            movie.thumbnail,
            movie.id,
            movie.nameRU,
            movie.nameEN,
          )}
          disabled={isSave}
        >
          <img src={isSave ? galochka : ''} alt=''></img>
          {isSave ? '' : 'Сохранить'}
        </button>
      )}
    </div>
  )
}

export default MoviesCard;