import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from 'react';
import Preloader from "../Preloader/Preloader";
import moviesApi from '../../utils/MoviesApi';

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

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [paramsShow, setParamsShow] = useState(PARAMS_SHOW.large);
  const [showCount, setShowCount] = useState(getInitialShowCount(window.innerWidth));
  const [filter, setFilter] = useState({
    query: '',
    isShortFilm: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.addEventListener('resize', onResize);
    const moviesPage = getFromStorage();
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
    moviesApi.getMovies()
      .then((data) => {
        console.log(data)
        setFilter(filterForm);
        setMovies(data);
        saveToStorage(data, filterForm);
        setShowCount(paramsShow.initial);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function onCliclShowMore() {
    setShowCount(showCount + paramsShow.moreAdd);
  }

  const filteredMovies = getFilteredMovies(movies, filter);
  const cuttedMovies = getCuttedMovies(filteredMovies, showCount);

  return (
    <>
      <SearchForm
        filter={filter}
        onSubmit={onSubmit}
        error={error}
      />
      {isLoading ? (<Preloader/>) : (<section className="movies-container">
        <MoviesCardList savedMovies={props.savedMovies} movies={cuttedMovies.movies} />
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