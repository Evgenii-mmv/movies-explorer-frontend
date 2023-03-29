import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from 'react';
import Preloader from "../Preloader/Preloader";
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

let isResizeOn = false;

const STORAGE_KEY = 'moviesPage';
const PARAMS_SHOW = {
  large: {
    initial: 12,
    moreAdd: 3,
  },
  medium: {
    initial: 8,
    moreAdd: 2,
  },
  small: {
    initial: 5,
    moreAdd: 2,
  }
}
const WINDOW_WIDTH = {
  large: 1170,
  medium: 730,
}

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

    return queryFiltered.filter(movie =>
      movie.duration < 40
    )
  }
  return queryFiltered;
}

function getCuttedMovies(movies, showCount) {
  if (movies.length <= showCount){
    return {
      movies: movies,
      isMore: false,
    }
  }else{
    const cuttedMovies = movies.slice(0,showCount);
    return {
      movies: cuttedMovies,
      isMore: true,
    }
  }
}

function getInitialShowCount(windowWidth) {
  if (windowWidth > WINDOW_WIDTH.large) {
    return PARAMS_SHOW.large.initial;
  } else if (windowWidth > WINDOW_WIDTH.medium) {
    return PARAMS_SHOW.medium.initial;
  } else {
    return PARAMS_SHOW.small.initial;
  }
}

function addSaveToMovies(movies, userMovies) {
  return movies.map(movie => {
    return {
      ...movie,
      isSave: userMovies.some(userMovie => userMovie.movieId === movie.id),
    }
  });
}

function Movies() {
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [paramsShow, setParamsShow] = useState(PARAMS_SHOW.large);
  const [showCount, setShowCount] = useState(getInitialShowCount(window.innerWidth));
  const [filter, setFilter] = useState({
    query: '',
    isShortFilm: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.addEventListener('resize', onResize);
    const moviesPage = getFromStorage();
    const token = localStorage.getItem("jwt");
    api.updateToken(token);
    api.getMovies()
        .then((data) => {
          if (data) {
            setUserMovies(data.movies);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));

    if (moviesPage) {
      setMovies(moviesPage.movies);
      setFilter(moviesPage.filter);
    }
    return () => {
      window.removeEventListener('resize', onResize);
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
    setError('')
    setIsLoading(true);

    if (!submit){
      moviesApi.getMovies()
        .then((data) => {
          setFilter(filterForm);
          setMovies(data);
          saveToStorage(data, filterForm);
          setShowCount(paramsShow.initial);
          setSubmit(true)
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }else{
      setFilter(filterForm);
      const dataFromFoRmInLocal = getFromStorage();
      saveToStorage(dataFromFoRmInLocal.movies, filterForm);
      setIsLoading(false);
    }
  }

  function onCliclShowMore() {
    setShowCount(showCount + paramsShow.moreAdd);
  }


  function onButtonSaveClick(movie) {
    if (movie.isSave) {
      const foundMovie = userMovies.find((userMovie) => userMovie.movieId === movie.id);
      api.deleteMovie(foundMovie._id)
      .then(() => {
        setUserMovies(userMovies.filter(userMovie => userMovie.movieId !== movie.id))
      })
      .catch((err) => {
        console.error(err);
      });
    } else {
      api.postMovie(
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
        movie.nameEN
        )
        .then((data) => {
          setUserMovies([...userMovies, { ...data.movie, movieId: data.movie.movieId }])
        })
        .catch((err) => {
          console.error(err);
        });
      }
    }

    const filteredMovies = getFilteredMovies(movies, filter);
    const cuttedMovies = getCuttedMovies(filteredMovies, showCount);
    const moviesWithSave = addSaveToMovies(cuttedMovies.movies, userMovies);

  return (
    <>
      <SearchForm
        filter={filter}
        onSubmit={onSubmit}
        error={error}
      />
      {isLoading ? (<Preloader/>) : (<section className="movies-container">
        {moviesWithSave.length === 0 ? (<p className={`movies__empty ${!submit ? `hide` : ``}`}> Нет фильмов с таким ключевым словом</p>) : (<MoviesCardList onButtonSaveClick={onButtonSaveClick} movies={moviesWithSave} />)}
        {cuttedMovies.isMore && <button type="button" onClick={onCliclShowMore} className='movies__more button' >Ещё</button>}
      </section>)}
    </>
  )

  function onResize() {
    if (!isResizeOn) {
      const width = window.innerWidth;
      if (width > WINDOW_WIDTH.large) {
        setParamsShow(PARAMS_SHOW.large);
      } else if (width > WINDOW_WIDTH.medium) {
        setParamsShow(PARAMS_SHOW.medium);
      } else {
        setParamsShow(PARAMS_SHOW.small);
      }

      isResizeOn = true;
      setTimeout(() => {
        isResizeOn = false;
      }, 300);
    }
  }
}

export default Movies;