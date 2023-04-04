import {useEffect, useState} from 'react'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import api from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

const STORAGE_KEY = 'savedMoviesPage';

function saveToStorage(movies, filter) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    movies,
    filter,
  }));

  return;
}

function getFromStorage() {
  const moviesPage = localStorage.getItem(STORAGE_KEY)
  if (!moviesPage) {
    return;
  }
  return JSON.parse(moviesPage);
}

function getFilteredMovies(movies, filter) {
  const queryFiltered = movies.filter (movie =>
    movie.nameRU.toLowerCase().includes(filter.query.toLowerCase())
  )
  if (filter.isShortFilm) {
    const queryFilteredShort = queryFiltered.filter(movie =>
      movie.duration < 40)
      saveToStorage(queryFilteredShort, filter)
      return queryFilteredShort
  }
  saveToStorage(queryFiltered, filter)
  return queryFiltered;
}

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({
    query: '',
    isShortFilm: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if(token)
    {
      api.updateToken(token);
      const SavedMovie = getFromStorage();
      if(SavedMovie)
      {
        setMovies(SavedMovie.movies);
        setFilter(SavedMovie.filter);
      }
      setIsLoading(true);
      api.getMovies()
        .then((data) => {
          if (data.movies.length !== 0) {
            saveToStorage(data.movies, filter)
            setMovies(data.movies);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const filterForm = {
      query: e.target.query.value,
      isShortFilm: e.target.isShortFilm.checked,
    }
    if (!filterForm.query) {
      setError('Введите ключевое слово')
      return;
    }
    setEmpty(false)
    setFilter(filterForm);
  }

  const onRemoveFilm = (id) => {
    api.deleteMovie(id)
    .then(() => {
      const newMovies = movies.filter(movie => movie._id !== id);
      setMovies(newMovies);
      saveToStorage(newMovies, filter);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  const filteredMovies = getFilteredMovies(movies, filter);

  return (
    <>
      <SearchForm
      filter={filter}
      error={error}
      onSubmit={onSubmit}
      />
      {isLoading ? (<Preloader/>) : (
      <section className="movies">
        { filteredMovies.length === 0 ? (<p className={`movies__empty ${!empty ? `` : `hide`}`}> Нет фильмов с таким ключевым словом</p>) : (
          <>
        <div className="movies__container--saved"></div>
          <div className='movies__list'>
            {filteredMovies.map(movie => <MoviesCard saved movie={movie} onRemoveFilm={onRemoveFilm} key={movie.movieId}/>)}
          </div>
          </>
          )}
      </section>)}

    </>
    )
}

export default SavedMovies;